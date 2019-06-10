import React from "react";
import Timer from "../Timer";
import ButtonControl from "../ButtonControl";
const TimerContainer = () => {
	return (
		<div className="timer-container">
			<Timer />
			<div className="button-controller-container">
				<ButtonControl name="Start-stop" id="start_stop" />
				<ButtonControl name="Reset" id="reset" />
			</div>
		</div>
	);
};
export default TimerContainer;
