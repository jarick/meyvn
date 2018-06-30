//@flow
import {
  setProgressStep as setProgressStepAction,
  setProgressStepFailed,
} from './creator';

export const setProgressStep = (step: number, oldStep: number) => {
  if (step - oldStep > 1) {
    return setProgressStepFailed();
  } else {
    return setProgressStepAction(step);
  }
}