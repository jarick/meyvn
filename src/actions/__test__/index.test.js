import { setProgressStep } from '../'
import { SET_PROGRESS_STEP, SET_PROGRESS_STEP_FAILED } from '../types'

describe('action test', () => {
  it('should return change step action when action is dispatching', () => {
    expect(
      setProgressStep(2, 1)
    ).toEqual({
      type: 'SET_PROGRESS_STEP',
      payload: {
        step: 2,
      }
    })
  })
  it('should return change step failed action when step more old step more than 1', () => {
    expect(
      setProgressStep(3, 1)
    ).toEqual({
      type: 'SET_PROGRESS_STEP_FAILED',
    })
  })
})
