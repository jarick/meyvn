//@flow
import { SET_PROGRESS_STEP, SET_PROGRESS_STEP_FAILED } from './types';

export const setProgressStep = (step: number) => ({
  type: SET_PROGRESS_STEP,
  payload: { step }
});

export const setProgressStepFailed = () => ({
  type: SET_PROGRESS_STEP_FAILED,
});
