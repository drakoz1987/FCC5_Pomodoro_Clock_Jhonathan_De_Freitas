import React, { Component } from "react";
import { connect } from "react-redux";

class Timer extends Component {
	render = () => {
		console.log(this.props.sessionOrBreak);
		let item = this.props;
		return (
			<div className="timer">
				<h3 id="timer-label">Time Left:</h3>
				<div className="digital" id="time-left">
					{item.sessionOrBreak === true
						? item.currentSessionTime
						: item.currentBreakTime}
				</div>
			</div>
		);
	};
}
const mapStateToProps = state => {
	return {
		sessionOrBreak: state.sessionOrBreak,
		currentSessionTime: state.currentSessionTime,
		currentBreakTime: state.currentBreakTime
	};
};
export default connect(mapStateToProps)(Timer);
