import DBooster from '../app';
import React, { useEffect, useRef } from 'react';
import { useObservable } from '@ngneat/react-rxjs';
import { LoaderInterface } from '../app/models/loader/loader.interface';
import { LoaderGlobal } from './atoms/loader.global';
import { TopBar } from './molecules/top.bar';
import { Footer } from './molecules/footer';
import { StepsAvailEnum, UiStateInterface } from '../app/services/store/interfaces/initial.state.interface';
import { PurchasePage } from './pages/purchase';
import { PurchaseStepInterface } from '../app/models/purchase.step/purchase.step.interface';
import { PurchaseStepper } from './organisms/purchase.stepper';
import { CartItemInterface } from '../app/models/cart.item/cart.item.interfase';
import { TestimonialInterface } from '../app/models/testimonial/testimonial.interface';
import { BrandingBar } from './molecules/branding.bar';

const App = () => {
  const selfRef = useRef(true);
  const gameWrapper = useRef(null);
  const loader: LoaderInterface = useObservable(DBooster.store.loader.state())[0];
  const ui: UiStateInterface = useObservable(DBooster.store.ui.state())[0];
  const purchaseSteps: PurchaseStepInterface[] = useObservable(DBooster.store.purchaseSteps.entitie$)[0];
  const cart: CartItemInterface[] = useObservable(DBooster.store.cart.entitie$)[0];
  const customerTestimonials: TestimonialInterface[] = useObservable(DBooster.store.customerTestimonials.entitie$)[0];

  useEffect(() => {
    const firstRender = selfRef.current;

    if (firstRender) {
      console.log('GO!');
      selfRef.current = false;
      DBooster.onComponentsReady();
    } else {
      console.warn('NO GO!');
    }
  }, [gameWrapper]);

  return <>
    <LoaderGlobal on={ loader.on } value={ loader.value }/>

    <TopBar links={ ui.topLinks }/>
    <BrandingBar/>

    <div className="bg-light-sm pb-5">
      <div className="text-center pt-4 mb-3">
        <h1 className="page-title mt-3">Wait! Your Order In Progress.</h1>
        <p className="fs-6 mt-3 mb-0">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing</p>
      </div>

      <div className="container">
        <PurchaseStepper
          controller={ DBooster.controllers.purchaseStepperController }
          purchaseSteps={ purchaseSteps }
          currentStep={ ui.currentStep }
          cart={ cart }
          customerTestimonials={ customerTestimonials }
          brandPrefix={ ui.brandPrefix }
        />
      </div>
    </div>

    <Footer contactEmails={ ui.contactEmails }/>
  </>;
};

export default App;
