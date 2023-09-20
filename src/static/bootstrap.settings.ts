import { BootstrapSettingsInterface } from './interfaces/bootstrap.settings.interface';

const settings: BootstrapSettingsInterface = {
  delay: 0,
  wrapperId: 'GAME_WRAPPER',
  initEventName: 'APP_INIT_READY',
  startEventName: 'APP_START_READY',
  api: {
    default: {
      conf: {
        protocol: 'http',
        host: 'cantunia.carlos-bucheli.com',
        basePath: '/',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      },
      endpoints: {
        'initialState': 'state/initial',
      },
    },
  }
};

export default settings;
