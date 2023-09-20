import { createStore, PropsFactory, select, setProp, Store } from '@ngneat/elf';
import { PropsStoreInterface } from '../interfaces/props.store.interface';

export class PropsStore implements PropsStoreInterface {
  #store: Store;

  constructor(name: string, withProps: PropsFactory<any, any>) {
    this.#store = createStore({ name }, withProps);
  }

  /**
   * Get the current value of a prop or the current state
   *
   * @param prop
   */
  value(prop: string | null = null) {
    const state = this.#store.getValue();
    return prop ? state[prop] : state;
  }

  state() {
    return this.#store.pipe(select((state) => state));
  }

  /**
   * Get an observer for a single property of the state
   *
   * @param prop
   */
  getProp(prop: string) {
    return this.#store.pipe(select((state) => state[prop]));
  }

  /**
   * Set a value for a single property of the state
   *
   * @param prop
   * @param value
   */
  setProp(prop: string, value: any) {
    this.#store.update(setProp(prop, value));
  }

  /**
   * Set ALL props
   *
   * @param props
   */
  set(props: any) {
    Object.keys(props).forEach((key: string) => {
      this.setProp(key, props[key]);
    });
  }
}
