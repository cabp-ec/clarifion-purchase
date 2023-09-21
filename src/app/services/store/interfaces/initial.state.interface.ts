import { PurchaseStepInterface } from '../../../models/purchase.step/purchase.step.interface';
import { KeyStringPairInterface } from '../../../interfaces/value.pairs/key.string.pair.interface';
import { LinkItemInterface } from '../../../models/link.item/link.item.interface';
import { CartItemInterface } from '../../../models/cart.item/cart.item.interfase';
import { ProductInterface } from '../../../models/product/product.interface';
import { SpecialOfferInterface } from '../../../models/special.offer/special.offer.interface';
import { TestimonialInterface } from '../../../models/testimonial/testimonial.interface';

export enum StepsAvailEnum {
  'cartReview' = 1,
  'checkout',
  'specialOffers',
  'confirmation',
}

export enum SpecialOfferEnum {
  'fixedPrice' = 1,
  'percentage',
}

export interface IdNameInterface {
  id: PropertyKey;
  name: string;
}

export interface PaymentInterface {
  name: string;
  surname: string;
  email: string;
  country: PropertyKey,
  state: string;
  postalCode: string;
  paymentMethod: PropertyKey;
  cardNumber: string,
  cardExpMonth: number;
  cardExpYear: number;
  cardCode: number;
}

export interface UiStateInterface {
  currentStep: PropertyKey;
  brandPrefix: string;
  displayStepPrefix: boolean;
  maxSpecialOffers: number;
  contactEmails: KeyStringPairInterface;
  // contactEmails: {
  //   webSupport: string;
  //   productSupport: string;
  //   contact: string;
  // },
  topLinks: LinkItemInterface[];
}

export interface InitialStateInterface {
  paymentMethods: IdNameInterface[],
  countriesAvail: IdNameInterface[],
  specialOffers: SpecialOfferInterface[],
  customerTestimonials: TestimonialInterface[],
  productsAvail: ProductInterface[],
  cart: CartItemInterface[],
  payment: PaymentInterface,
  purchaseSteps: PurchaseStepInterface[],
  uiState: UiStateInterface,
}
