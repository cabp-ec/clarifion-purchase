import { KeyAnyPairInterface } from '../../app/interfaces/value.pairs/key.any.pair.interface';

export interface BootstrapSettingsInterface {
  delay: number;
  wrapperId: string;
  initEventName: string;
  startEventName: string;
  api: KeyAnyPairInterface;
}
