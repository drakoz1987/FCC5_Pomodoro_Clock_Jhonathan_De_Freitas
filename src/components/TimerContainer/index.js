import React from "react";
import Timer from "../Timer";
import ButtonControl from "../ButtonControl";
const TimerContainer = () => {
	return (
		<div className="timer-container">
			<Timer />
			<ButtonControl name="Start-stop" id="start_stop" />
			<ButtonControl name="Reset" id="reset" />
		</div>
	);
};
export default TimerContainer;
