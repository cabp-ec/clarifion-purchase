import { PurchaseStepInterface } from '../../../models/purchase.step/purchase.step.interface';
import { KeyStringPairInterface } from '../../../interfaces/value.pairs/key.string.pair.interface';
import { LinkItemInterface } from '../../../models/link.item/link.item.interface';

export enum SpecialOfferEnum {
  'fixedPrice' = 1,
  'percentage',
}

export interface IdNameInterface {
  id: PropertyKey;
  name: string;
}

export interface SpecialOfferInterface {
  id: PropertyKey;
  minProductsInCart: number;
  additionalProducts: number;
  value: number;
  type: SpecialOfferEnum;
  satisfactionGuarantee: string;
  freeShipping?: boolean;
  displayBrandInDisclaimer?: boolean;
}

export interface CustomerTestimonialInterface {
  id: PropertyKey;
  ranking: number;
  author: {
    name: string;
    thumbnail: string;
  };
  verifiedCustomer: boolean;
  text: string;
}

export interface ProductInterface {
  id: PropertyKey
  uri: string;
  name: string;
  brandPrefixed: boolean;
  ranking: number;
  stock: number;
  price: number;
  description: {
    short: string;
    large: string;
  };
  advantages: string[];
  images: {
    large: string;
    medium: string;
    small: string;
  },
  testimonials?: PropertyKey[];
  specialOffer?: PropertyKey;
}

export interface CartItemInterface {
  product: number;
  qty: number;
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
  displayStepPrefix: boolean,
  maxSpecialOffers: number,
  contactEmails: KeyStringPairInterface,
  // contactEmails: {
  //   webSupport: string;
  //   productSupport: string;
  //   contact: string;
  // },
  topLinks: LinkItemInterface[]
}

export interface InitialStateInterface {
  paymentMethods: IdNameInterface[],
  countriesAvail: IdNameInterface[],
  specialOffers: SpecialOfferInterface[],
  customerTestimonials: CustomerTestimonialInterface[],
  productsAvail: ProductInterface[],
  cart: CartItemInterface[],
  payment: PaymentInterface,
  purchaseSteps: PurchaseStepInterface[],
  uiState: UiStateInterface,
}
