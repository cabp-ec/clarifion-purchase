import React from 'react';
import { PurchaseStepper } from '../../organisms/purchase.stepper';
import { PurchaseStepInterface } from '../../../app/models/purchase.step/purchase.step.interface';

interface PurchasePageProps {
  // brandPrefix: string;
  // displayStepPrefix: boolean;
  purchaseSteps: PurchaseStepInterface[];
  currentStep: PropertyKey;
}

export const PurchasePage: React.FC<PurchasePageProps> = ({ purchaseSteps }: PurchasePageProps) => {
  return <section className="page-purchase">
    <div className="container">
      <PurchaseStepper purchaseSteps={ purchaseSteps }/>
    </div>
  </section>;
};
