import { connect } from 'react-redux';
import React from 'react';

import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { startAction } from '../actions/startAction';
import { stopAction } from '../actions/stopAction';
import { startActionCreator, stopActionCreator } from '../actionCreator/actionCreator';
import './loading.scss';
class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
  }
  componentDidMount() {
    console.log('Props', this.props);
    console.log('Component Mounted', this.props);
  }

  handleStateChange() {}
  render() {
	return (
	<div>Roating {this.props.rotate?.rotating?"true":"false"}
    <img
      src={'./images/arrow.png'}
      className={'App-logo' + (this.props.rotate?.rotating ? '' : ' App-logo-paused')}
      alt="logo"
      onClick={
        this.props.rotate?.rotating ? this.props.stopActionCreator : this.props.startActionCreator
	      }
	  
    />;
	</div>
	)
  }
}

const mapStateToProps = (state) => ({
  ...state
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
	{ startActionCreator, stopActionCreator },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Loading);
