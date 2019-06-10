import React from "react";
import Controller from "../Controller";
import TimerContainer from "../TimerContainer";
import Alarm from "../Alarm";
//
//
const App = () => {
	return (
		<div className="pomodoro-clock-container" id="App">
			<h2 className="app-title">My Pomodoro!</h2>
			<Controller />
			<TimerContainer />
			<Alarm />
		</div>
	);
};

export default App;
