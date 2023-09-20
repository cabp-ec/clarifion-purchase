import { createStore, PropsFactory, Store } from '@ngneat/elf';
import {
  selectAllEntities,
  setEntities,
  addEntities,
  updateEntities,
  deleteEntities,
  selectEntity,
} from '@ngneat/elf-entities';
import { Observable } from 'rxjs';
import { AnyStateInterface } from '../services/store/interfaces/any.state.interface';
import { KeyAnyPairInterface } from '../interfaces/value.pairs/key.any.pair.interface';
import { KeyAnyPoolInterface } from './interfaces/key.any.pool.interface';

export class EntityStore {
  #store: Store;
  entitie$: Observable<any[]>;

  constructor(name: string, withEntities: PropsFactory<any, any>, entities: object[] = []) {
    this.#store = createStore({ name }, withEntities);
    this.entitie$ = this.#store.pipe(selectAllEntities());
    this.set(entities);
  }

  set(entities: any[]) {
    this.#store.update(setEntities(entities));
  }

  add(entity: any[]) {
    this.#store.update(addEntities(entity));
  }

  rem(id: PropertyKey | PropertyKey[]) {
    this.#store.update(deleteEntities(id));
  }

  update(id: PropertyKey, entity: Partial<object>) {
    this.#store.update(updateEntities(id, entity));
  }

  updateAll(value: object) {
    this.#store.update(updateEntities(this.currentState().ids, value));
  }

  exists(id: PropertyKey) {
    const state = this.currentState();
    return state.ids.includes(id);
  }

  // TODO: use a filter for this
  entities(ids: number[] = []): KeyAnyPoolInterface {
    const state: AnyStateInterface = this.currentState();
    const keys: number[] = [];
    const values: KeyAnyPairInterface = {};

    if (ids.length) {
      state.ids.forEach((id: number) => {
        if (ids.includes(id)) {
          keys.push(id);
          values[id] = state.entities[id];
        }
      });
    } else {
      return state;
    }

    return { ids: keys, entities: values };
  }

  pipeEntities() {
    return this.#store.pipe(selectAllEntities());
  }

  selectEntity(id: PropertyKey) {
    return this.#store.pipe(selectEntity(id));
  }

  currentState() {
    return this.#store.getValue();
  }

  nextId() {
    const state = this.currentState();
    return state.ids.length ? (state.ids[state.ids.length - 1] + 1) : 1;
  }

  static nextId(state: AnyStateInterface): number {
    return state.ids.length ? (state.ids[state.ids.length - 1] + 1) : 1;
  }
}
