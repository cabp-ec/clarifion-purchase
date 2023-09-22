import React, { ReactNode } from 'react';
import { KeyStringPairInterface } from '../../../app/interfaces/value.pairs/key.string.pair.interface';
import { PurchaseStepInterface } from '../../../app/models/purchase.step/purchase.step.interface';
import { Link } from '../../atoms/link';
import { StepsAvailEnum } from '../../../app/services/store/interfaces/initial.state.interface';
import { CartReviewStep } from '../purchase.steps/cart.review.step';
import { CheckoutStep } from '../purchase.steps/checkout.step';
import { SpecialOffersStep } from '../purchase.steps/special.offers.step';
import { ConfirmationStep } from '../purchase.steps/confirmation.step';
import { PurchaseStepperController } from './purchase.stepper.ctrl';
import { CartItemInterface } from '../../../app/models/cart.item/cart.item.interfase';
import DBooster from '../../../app';
import { TestimonialInterface } from '../../../app/models/testimonial/testimonial.interface';

interface PurchaseStepperProps {
  controller: PurchaseStepperController;
  purchaseSteps: PurchaseStepInterface[];
  currentStep: PropertyKey;
  cart: CartItemInterface[];
  customerTestimonials: TestimonialInterface[];
  brandPrefix: string;
}

export const PurchaseStepper: React.FC<PurchaseStepperProps> = ({
                                                                  controller,
                                                                  purchaseSteps,
                                                                  currentStep,
                                                                  brandPrefix
                                                                }: PurchaseStepperProps) => {
  const renderNavItems = (): ReactNode[] => {
    const items: ReactNode[] = [];

    purchaseSteps.forEach((step, index) => {
      const stepNum = index + 1;
      const stepMatch = currentStep === stepNum;
      const label = <><span className="d-none d-lg-inline">Step { stepNum }: </span>{ step.label }</>; // `Step ${ stepNum }: ${ step.label }`;
      const boldStyle = stepMatch ? 'fw-bold' : '';
      const icon = step.ready
        ? 'bi bi-check-circle-fill'
        : `bi bi-${ stepNum }-circle${ stepMatch ? '-fill' : '' }`;
      const iconColor = step.ready
        ? `text-success`
        : `text-primary`;
      const iconClassName = `${ icon } ${ iconColor } fs-3`;

      items.push(<a
        key={ `step-${ stepNum }` }
        onClick={ e => controller.onStepClick(stepNum) }
        className="cursor-pointer text-dark text-no-decoration-underline"
      >
        <i className={ iconClassName }/><p className={ `${ boldStyle } m-0` }>{ label }</p>
      </a>);
    });

    return items;
  };

  const renderStep = (): ReactNode => {
    switch (currentStep) {
      case (StepsAvailEnum.cartReview):
        return <CartReviewStep/>;
      case (StepsAvailEnum.checkout):
        return <CheckoutStep/>;
      case (StepsAvailEnum.specialOffers):
        return <SpecialOffersStep
          controller={ DBooster.controllers.specialOffersStepCtrl }
          brandPrefix={ brandPrefix }
        />;
      case (StepsAvailEnum.confirmation):
        return <ConfirmationStep/>;
      default:
        return null;
    }
  };

  return <div className="purchase-stepper d-flex flex-column w-100">
    <div className="d-flex justify-content-between">
      { renderNavItems() }
    </div>

    <div className="d-flex border-round-10 bg-light mt-3 mt-md-4 p-md-4 p-45">
      { renderStep() }
    </div>
  </div>;
};
