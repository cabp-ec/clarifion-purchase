import React, { ReactNode } from 'react';
import { CartItemInterface } from '../../../app/models/cart.item/cart.item.interfase';
import { SpecialOffersStepCtrl } from './special.offers.step.ctrl';
import { Testimonial } from '../../molecules/testimonial';
import { SpecialOfferEnum } from '../../../app/services/store/interfaces/initial.state.interface';
import { ProductRow } from '../../molecules/product.row';
import { SatisfactionBadge } from '../../atoms/satisfaction.badge';

interface SpecialOffersStepProps {
  controller: SpecialOffersStepCtrl;
  brandPrefix: string;
}

export const SpecialOffersStep: React.FC<SpecialOffersStepProps> = ({
                                                                      controller,
                                                                      brandPrefix
                                                                    }: SpecialOffersStepProps) => {
  const productOffer = controller.getProductOffer();

  if (!productOffer) {
    return null;
  }

  const { product, offer } = productOffer;
  // @ts-ignore
  const testimonial = controller.getTestimonial(product.testimonials[0]);

  const renderTitle = (): ReactNode => {
    const prefix = offer.oneTime ? <span className="text-primary">ONE TIME ONLY</span> : null;
    const brand = offer.displayBrandInDisclaimer ? brandPrefix : product.name;
    const price = offer.type === SpecialOfferEnum.fixedPrice ? `$${ offer.value } Each` : `${ offer.value }% Less`;
    const spanPrice = <span className="text-primary me-1">{ price }</span>;
    const spanTotal = <span className="d-block">{ `($${ offer.additionalProducts * offer.value } Total!)` }</span>;

    return <>
      { prefix } Special Price For { offer.additionalProducts } Extra { brand } For Only { spanPrice }{ spanTotal }
    </>;
  };

  const renderFeatures = (): ReactNode[] => {
    const items: ReactNode[] = [];

    product.advantages.forEach((item, index) => {
      items.push(<p key={ `product-feature-${ index }` }><i className="bi bi-check2 text-primary me-1"/>{ item }</p>);
    });

    return items;
  };

  const renderDisclaimer = (): ReactNode => {
    const totalBefore = product.price * offer.additionalProducts;
    const totalAfter = offer.value * offer.additionalProducts;
    const savings = Math.floor(100 - ((totalAfter * 100) / totalBefore));
    const spanSavings = <span className="text-primary px-1">{ savings }%</span>;
    const spanProduct = <span className="text-primary px-1">{ offer.additionalProducts } extra { brandPrefix }</span>;
    const spanValue = <span className="text-primary px-1">${ offer.value } each</span>;

    return <>Save{ spanSavings }and get { spanProduct }for only{ spanValue }</>;
  };

  return <div className="d-flex w-100">
    <div className="row row-cols-1 row-cols-md-2 g-2">
      <div className="col">
        <div className="me-3">
          <img src={ product.images.large } alt={ product.name } className="img-fluid"/>
          {
            testimonial
              ? <Testimonial testimonial={ testimonial }/>
              : null
          }
        </div>
      </div>

      <div className="col">
        <div>
          <h3>{ renderTitle() }</h3>
          <ProductRow product={ product } overriddenPrice={ offer.value }/>
          <div className="my-4">{ renderFeatures() }</div>

          <div className="bg-primary-subtle border-round-10 p-2">
            <span className="d-inline-block text-center bg-primary text-white square-25 thumbnail-circle me-2">%</span>
            { renderDisclaimer() }
          </div>
        </div>

        <button type="button" className="btn btn-success w-100 border-round-100 p-2 my-3">
          YES - CLAIM MY DISCOUNT<i className="bi bi-arrow-right ms-3"/>
        </button>

        <div className="d-flex border border-secondary-subtle border-round-5 p-2">
          <div className="flex-fill border-end border-secondary-subtle"><small>Free Shipping</small></div>
          <div className="flex-fill text-center"><i className="bi bi-lock me-1"/><small>Secure 256-Bit SSL
            Encryption</small></div>
          <div className="flex-fill border-start border-secondary-subtle ps-3"><small>Flex item</small></div>
        </div>

        <button type="button" className="btn bg-transparent text-danger text-decoration-underline w-100 p-2 my-3">
          NO THANKS, I DON'T WANT THIS.
        </button>

        <SatisfactionBadge text={ offer.satisfactionGuarantee }/>
      </div>
    </div>
  </div>;
};
