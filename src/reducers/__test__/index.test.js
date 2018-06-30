//@flow

import { progress } from '../'
import { SET_PROGRESS_STEP, SET_PROGRESS_STEP_FAILED } from './../../actions/types';

describe('reducer test', () => {
  it('should return intial state when dispatching empty action', () => {
    expect(
      progress(undefined, {})
    ).toEqual({ step: 1, failed: false })
  })
  it('should return modify state when dispatching set progress action', () => {
    expect(
      progress(undefined, {
        type: SET_PROGRESS_STEP,
        payload: {
          step: 2,
        }
      })
    ).toEqual({ step: 2, failed: false })
  })
  it('should return modify state when dispatching set progress failed action', () => {
    expect(
      progress(undefined, {
        type: SET_PROGRESS_STEP_FAILED,
      })
    ).toEqual({ step: 1, failed: true })
  })

})