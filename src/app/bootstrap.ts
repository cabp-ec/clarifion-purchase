import { BootstrapSettingsInterface } from '../static/interfaces/bootstrap.settings.interface';
import { InitialStateInterface } from './services/store/interfaces/initial.state.interface';
import { ApiClient } from './api.client';
import { StoreService } from './services/store/store.service';
import { UiService } from './services/ui/ui.service';
// import apiRef from './../api/api.ref';
import constants from '../static/constants';
import initialState from '../../tests/states';
import { ControllersAvailInterface } from '../static/interfaces/controllers.avail.interface';
import { PurchaseStepperController } from '../components/organisms/purchase.stepper/purchase.stepper.ctrl';
import { SpecialOffersStepCtrl } from '../components/organisms/purchase.steps/special.offers.step.ctrl';

/**
 * Application Bootstrap
 *
 * @param _settings
 * @returns {Bootstrap}
 * @constructor
 */
const Bootstrap = function (_settings: BootstrapSettingsInterface) {
  'use strict';

  let _instance: Bootstrap;

  /**
   * Bootstrap Class
   *
   * @class
   */
  class Bootstrap {
    #settings;
    #initEvent: CustomEvent;
    initEventName: string = _settings.initEventName;
    startEventName: string = _settings.startEventName;
    api: ApiClient = new ApiClient();
    store: StoreService;
    ui: UiService;
    controllers: ControllersAvailInterface;

    /**
     * Constructor for the Bootstrap class
     *
     * @param settings
     */
    constructor(settings: BootstrapSettingsInterface) {
      this.#settings = settings;
      this.#initEvent = new CustomEvent(this.initEventName);
      this.store = new StoreService();
      this.ui = new UiService();
      this.controllers = {
        purchaseStepperController: new PurchaseStepperController(this.store),
        specialOffersStepCtrl: new SpecialOffersStepCtrl(this.store),
      };
    }

    /**
     * Set progress globally
     *
     * @param value
     * @private
     */
    #setGlobalProgress(value: number) {
      this.store.loader.setProp(constants.VALUE, value);
      // @ts-ignore
      window.DBOOSTER.loader.set(value);
    }

    /**
     * Dispatch the INIT event
     */
    #dispatchInit() {
      // setTimeout(() => {
      document.dispatchEvent(this.#initEvent);
      // }, this.#settings.delay * 100);
    }

    /**
     * Initialize with data
     *
     * @param initialState
     * @private
     */
    #initialize(initialState: InitialStateInterface) {
      this.store.init(initialState);
      this.#setGlobalProgress(50);
      this.#dispatchInit();
    }

    onComponentsReady() {
      this.ui.closeLoader(100, 0);
    }

    /**
     * Initialize Application and Services
     */
    init() {
      console.log('INIT', initialState);
      this.#setGlobalProgress(25);
      this.#initialize(initialState);

      // Get the initial state, then initialize
      // this.api.get({ endpoint: apiRef.default.endpoints.state.get })
      //   .then((data: InitialStateInterface) => {
      //     this.#setGlobalProgress(25);
      //     this.#initialize(data);
      // });
    }

    /**
     * Get an instance of Bootstrap
     * @returns {*}
     */
    static getInstance() {
      if (!_instance) {
        _instance = new this(_settings);
      }

      return _instance;
    }
  }

  return Bootstrap.getInstance();
};

export default Bootstrap;
