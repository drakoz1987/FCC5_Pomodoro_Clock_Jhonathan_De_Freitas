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
		defaultValue: 25,
		value: 0
	},
	breaker: {
		label: "break-label",
		inc: "break-increment",
		dec: "break-decrement",
		len: "break-length",
		length: "Break Length",
		defaultValue: 5,
		value: 0
	},
	currentSessionTime: "25:00",
	currentBreakTime: "05:00",
	sessionOrBreak: true
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
