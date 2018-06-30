import { connect } from 'react-redux'
import { setProgressStep } from './../actions'
import Progress from './../components/Progress'


const mapStateToProps = (state) => ({
  step: state.progress.step
})

const mapDispatchToProps = (dispatch) => ({
  onChangeStep: (step: number, oldStep: number) => (
    dispatch(setProgressStep(step, oldStep))
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Progress);
