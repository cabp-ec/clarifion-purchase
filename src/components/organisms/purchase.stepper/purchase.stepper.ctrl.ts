import { StepsAvailEnum } from '../../../app/services/store/interfaces/initial.state.interface';
import { StoreService } from '../../../app/services/store/store.service';

export class PurchaseStepperController {
  #store: StoreService;

  constructor(store: StoreService) {
    this.#store = store;
  }

  /**
   * Handle the click of a purchase step
   *
   * @param stepNum
   */
  onStepClick(stepNum: StepsAvailEnum) {
    const steps = this.#store.purchaseSteps.currentState();
    console.log('CLICK STEP', stepNum);
    console.log('Steps', steps);
    this.#store.ui.setProp('currentStep', stepNum);
  }
}
