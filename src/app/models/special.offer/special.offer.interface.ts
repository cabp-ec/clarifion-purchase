import { SpecialOfferEnum } from '../../services/store/interfaces/initial.state.interface';

export interface SpecialOfferInterface {
  id: PropertyKey;
  minProductsInCart: number;
  additionalProducts: number;
  value: number;
  type: SpecialOfferEnum;
  oneTime: boolean;
  satisfactionGuarantee: string;
  freeShipping?: boolean;
  displayBrandInDisclaimer?: boolean;
}
