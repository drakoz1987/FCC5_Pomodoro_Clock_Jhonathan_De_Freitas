import React from "react";
import Controller from "../Controller";
import TimerContainer from "../TimerContainer";
import Alarm from "../Alarm";
//
//
const App = () => {
	return (
		<div className="pomodoro-clock-container" id="App">
			<Controller />
			<TimerContainer />
			<Alarm />
		</div>
	);
};

export default App;
