import React, { ReactNode } from 'react';
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
    const prefix = offer.oneTime ? <span className="text-primary d-inline">ONE TIME ONLY</span> : null;
    const brand = offer.displayBrandInDisclaimer ? brandPrefix : product.name;
    const price = offer.type === SpecialOfferEnum.fixedPrice ? `$${ offer.value } Each` : `${ offer.value }% Less`;
    const spanPrice = <span className="text-primary me-1">{ price }</span>;
    const spanTotal = <span className="d-lg-block">{ `($${ offer.additionalProducts * offer.value } Total!)` }</span>;
    const text = `Special Price For ${ offer.additionalProducts } Extra ${ brand } For Only`;

    return <>
      { prefix } { text } { spanPrice }{ spanTotal }
    </>;
  };

  const renderFeatures = (): ReactNode[] => {
    const items: ReactNode[] = [];

    product.advantages.forEach((item, index) => {
      items.push(<p key={ `product-feature-${ index }` } className="mb-2 mb-lg-4">
        <i className="bi bi-check2 text-primary me-1 float-start"/>
        <span className="fs-07">{ item }</span>
      </p>);
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

    return <span className="text d-block">Save{ spanSavings }and get { spanProduct }for only{ spanValue }</span>;
  };

  return <div className="d-flex w-100">
    <div className="row row-cols-1 row-cols-md-2 g-2">
      <div className="col d-none d-md-block">
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
          <h3 className="text-center text-lg-start">{ renderTitle() }</h3>
          <ProductRow product={ product } overriddenPrice={ offer.value }/>
          <div className="product-features mt-3 mt-lg-5 mb-lg-4">{ renderFeatures() }</div>

          <div className="offer-disclaimer bg-primary-subtle border-round-10 my-3 p-2">
            <span className="d-block float-start text-center bg-primary text-white square-25 thumbnail-circle me-2">%</span>
            { renderDisclaimer() }
          </div>
        </div>

        <button type="button" className="btn btn-success w-100 border-round-100 p-2 my-3">
          YES - CLAIM MY DISCOUNT<i className="bi bi-arrow-right ms-3"/>
        </button>

        <div className="border border-secondary-subtle border-round-5 p-1 px-2 card-box">
          <div className="row row-cols-2 g-2 row-cols-lg-3 g-lg-3">
            <div className="col text-center text-md-start"><small>Free Shipping</small></div>
            <div className="col text-center border-start text-md-end"><i className="bi bi-lock me-1"/><small>Secure 256-Bit SSL Encryption</small></div>
            <div className="col text-center text-md-end border-secondary-subtle mx-2 mx-lg-0">
              <img alt="" src="/img/cards.png" className="img-fluid mt-2" width={185}/>
            </div>
          </div>
        </div>

        <button type="button" className="btn bg-transparent text-danger text-decoration-underline w-100 p-2 my-3">
          NO THANKS, I DON'T WANT THIS.
        </button>

        <SatisfactionBadge text={ offer.satisfactionGuarantee }/>
      </div>
    </div>
  </div>;
};
