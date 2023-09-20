import { withProps } from '@ngneat/elf';
import { withEntities } from '@ngneat/elf-entities';
import { LoaderInterface } from '../../models/loader/loader.interface';
import { InitialStateInterface, UiStateInterface } from './interfaces/initial.state.interface';
import { PropsStore } from '../../stores/props.store';
import { EntityStore } from '../../stores/entity.store';
import { PurchaseStepInterface } from '../../models/purchase.step/purchase.step.interface';
import InitialStaticState from '../../../static/state/initial.static.state';
import constants from '../../../static/constants';

export class StoreService {
  loader: PropsStore;
  purchaseSteps: EntityStore;
  ui: PropsStore;

  /**
   * The StoreService class
   */
  constructor() {
    this.loader = new PropsStore(constants.LOADER, withProps<LoaderInterface>(InitialStaticState.loader));
    this.purchaseSteps = new EntityStore('purchaseSteps', withEntities<PurchaseStepInterface>(), []);
    this.ui = new PropsStore('uiState', withProps<UiStateInterface>(InitialStaticState.ui));
  }

  /**
   * Initialize stores with data
   *
   * @param state
   */
  init(state: InitialStateInterface) {
    this.purchaseSteps.set(state.purchaseSteps);
    this.ui.set(state.uiState);
  }
}
