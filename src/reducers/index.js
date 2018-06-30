import { combineReducers } from 'redux';
import { SET_PROGRESS_STEP, SET_PROGRESS_STEP_FAILED } from './../actions/types';

let initialState = { step: 1, failed: false };

export const progress = (state=initialState, action) => {
  switch (action.type) {
    case SET_PROGRESS_STEP:
      return { ...state, ...action.payload, failed: false }
    case SET_PROGRESS_STEP_FAILED:
      return { ...state, failed: true }
    default:
      return state
  }
}

export default combineReducers({
  progress
});
