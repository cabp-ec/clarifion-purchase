import { StoreService } from '../../../app/services/store/store.service';
import { CartItemInterface } from '../../../app/models/cart.item/cart.item.interfase';
import { ProductInterface } from '../../../app/models/product/product.interface';
import { SpecialOfferInterface } from '../../../app/models/special.offer/special.offer.interface';
import { ProductOfferInterface } from '../../../app/models/product/product.offer.interface';
import { TestimonialInterface } from '../../../app/models/testimonial/testimonial.interface';

export class SpecialOffersStepCtrl {
  #store: StoreService;

  constructor(store: StoreService) {
    this.#store = store;
  }

  getProductOffer(index: number = 0): ProductOfferInterface | null {
    const cart = this.#store.cart.currentState();
    const productsAvail = this.#store.productsAvail.currentState();
    const item: CartItemInterface = cart.entities[cart.ids[index]];
    const product: ProductInterface = productsAvail.entities[item.product];

    if (product.specialOffer) {
      const specialOffers = this.#store.specialOffers.currentState();
      return {
        product,
        offer: specialOffers.entities[product.specialOffer]
      };
    }

    return null;
  }

  getTestimonial(id: PropertyKey): TestimonialInterface | null {
    const customerTestimonials = this.#store.customerTestimonials.currentState();
    return customerTestimonials.entities[id] || null;
  }
}
