import DBooster from '../app';
import React, { useEffect, useRef } from 'react';
import { useObservable } from '@ngneat/react-rxjs';
import { LoaderInterface } from '../app/models/loader/loader.interface';
import { LoaderGlobal } from './atoms/loader.global';
import { TopBar } from './molecules/top.bar';
import { Footer } from './molecules/footer';
import { UiStateInterface } from '../app/services/store/interfaces/initial.state.interface';

const App = () => {
  const selfRef = useRef(true);
  const gameWrapper = useRef(null);
  const loader: LoaderInterface = useObservable(DBooster.store.loader.state())[0];
  const ui: UiStateInterface = useObservable(DBooster.store.ui.state())[0];

  useEffect(() => {
    const firstRender = selfRef.current;

    if (firstRender) {
      selfRef.current = false;
      DBooster.onComponentsReady();
    }
  }, [gameWrapper]);

  return <>
    <LoaderGlobal on={ loader.on } value={ loader.value }/>
    <TopBar links={ ui.topLinks }/>
    content...
    <Footer contactEmails={ ui.contactEmails } links={ [] }/>
  </>;
};

export default App;
