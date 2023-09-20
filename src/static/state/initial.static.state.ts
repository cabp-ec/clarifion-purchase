import { InitialStaticStateInterface } from '../interfaces/initial.static.state.interface';
import LoaderInitialState from './loader.static.state';
import UiInitialState from './ui.static.state';

const InitialStaticState: InitialStaticStateInterface = {
  loader: LoaderInitialState,
  ui: UiInitialState,
};

export default InitialStaticState;
