import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import reducer from "./reducer";
const INITIAL_STATE = {
	session: {
		label: "session-label",
		inc: "session-increment",
		dec: "session-decrement",
		len: "session-length",
		length: "Session Length",
		defaultValue: 25
	},
	breaker: {
		label: "break-label",
		inc: "break-increment",
		dec: "break-decrement",
		len: "break-length",
		length: "Break Length",
		defaultValue: 5
	},
	currentSessionTime: 25,
	timerLabel: "Session",
	currentBreakTime: 5,
	currentTimer: 25,
	currentSeconds: "00",
	sessionOrBreak: true,
	pauseOrRunning: false,
	passes: 0
};

const store = createStore(
	reducer,
	INITIAL_STATE,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const CONTAINER = document.getElementById("root");
let toRender = (
	<Provider store={store}>
		<App />
	</Provider>
);
ReactDOM.render(toRender, CONTAINER);
