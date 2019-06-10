import React, { Component } from "react";
import { connect } from "react-redux";

class Timer extends Component {
	render = () => {
		let item = this.props;
		let digitalDisplay;
		digitalDisplay =
			(item.currentTimer < 10
				? "0" + String(item.currentTimer)
				: item.currentTimer) +
			":" +
			item.currentSeconds;

		return (
			<div className="timer">
				<h3 id="timer-label">{item.timerLabel}</h3>
				<div className="digital" id="time-left">
					{digitalDisplay}
				</div>
			</div>
		);
	};
}
const mapStateToProps = state => {
	return {
		sessionOrBreak: state.sessionOrBreak,
		currentSessionTime: state.currentSessionTime,
		currentBreakTime: state.currentBreakTime,
		currentSeconds: state.currentSeconds,
		timerLabel: state.timerLabel,
		currentTimer: state.currentTimer
	};
};
export default connect(mapStateToProps)(Timer);
