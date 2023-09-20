import { UiStateInterface } from '../../app/services/store/interfaces/initial.state.interface';

const UiInitialState: UiStateInterface = {
  currentStep: 1,
  brandPrefix: 'Clarifion',
  displayStepPrefix: true,
  maxSpecialOffers: 1,
  contactEmails: {},
  topLinks: []
};

export default UiInitialState;
