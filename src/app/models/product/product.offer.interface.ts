import { ProductInterface } from './product.interface';
import { SpecialOfferInterface } from '../special.offer/special.offer.interface';

export interface ProductOfferInterface {
  product: ProductInterface;
  offer: SpecialOfferInterface;
}
