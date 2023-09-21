import { withProps } from '@ngneat/elf';
import { withEntities } from '@ngneat/elf-entities';
import { LoaderInterface } from '../../models/loader/loader.interface';
import { InitialStateInterface, UiStateInterface } from './interfaces/initial.state.interface';
import { PropsStore } from '../../stores/props.store';
import { EntityStore } from '../../stores/entity.store';
import { PurchaseStepInterface } from '../../models/purchase.step/purchase.step.interface';
import InitialStaticState from '../../../static/state/initial.static.state';
import constants from '../../../static/constants';
import { CartItemInterface } from '../../models/cart.item/cart.item.interfase';
import { ProductInterface } from '../../models/product/product.interface';
import { SpecialOfferInterface } from '../../models/special.offer/special.offer.interface';
import { TestimonialInterface } from '../../models/testimonial/testimonial.interface';

export class StoreService {
  loader: PropsStore;
  specialOffers: EntityStore;
  customerTestimonials: EntityStore;
  productsAvail: EntityStore;
  cart: EntityStore;
  purchaseSteps: EntityStore;
  ui: PropsStore;

  /**
   * The StoreService class
   */
  constructor() {
    this.loader = new PropsStore(constants.LOADER, withProps<LoaderInterface>(InitialStaticState.loader));
    this.specialOffers = new EntityStore('specialOffers', withEntities<SpecialOfferInterface>(), []);
    this.customerTestimonials = new EntityStore('customerTestimonials', withEntities<TestimonialInterface>(), []);
    this.productsAvail = new EntityStore('productsAvail', withEntities<ProductInterface>(), []);
    this.cart = new EntityStore('cart', withEntities<CartItemInterface>(), []);
    this.purchaseSteps = new EntityStore('purchaseSteps', withEntities<PurchaseStepInterface>(), []);
    this.ui = new PropsStore('ui', withProps<UiStateInterface>(InitialStaticState.ui));
  }

  /**
   * Initialize stores with data
   *
   * @param state
   */
  init(state: InitialStateInterface) {
    this.specialOffers.set(state.specialOffers);
    this.customerTestimonials.set(state.customerTestimonials);
    this.productsAvail.set(state.productsAvail);
    this.cart.set(state.cart);
    this.purchaseSteps.set(state.purchaseSteps);
    this.ui.set(state.uiState);
  }
}
