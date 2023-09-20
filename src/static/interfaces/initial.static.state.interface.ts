import { LoaderInterface } from '../../app/models/loader/loader.interface';
import UiInitialState from '../state/ui.static.state';

export interface InitialStaticStateInterface {
  loader: LoaderInterface;
  ui: UiInitialState;
}
