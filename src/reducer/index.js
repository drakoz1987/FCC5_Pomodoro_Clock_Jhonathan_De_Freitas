import {
	INCREASE,
	DECREASE,
	START,
	RESET,
	CHANGESECONDS
} from "../actions/actions";

const reducer = (state, action) => {
	const actionData = action.type;
	let newState;
	let audio = document.getElementById("beep");
	switch (actionData) {
		case INCREASE:
			if (state.pauseOrRunning) {
				newState = { ...state };
			} else {
				if (action.payload.element === "breaker") {
					let breakerDuration = state.currentBreakTime + 1;

					if (breakerDuration >= 60) {
						breakerDuration = 60;
					}
					newState = {
						...state,
						currentBreakTime: breakerDuration
					};
				} else {
					let sessionDuration = state.currentSessionTime + 1;
					if (sessionDuration >= 60) {
						sessionDuration = 60;
					}

					newState = {
						...state,
						currentSessionTime: sessionDuration,
						currentTimer: sessionDuration,
						currentSeconds: "00"
					};
				}
			}
			break;
		case DECREASE:
			if (state.pauseOrRunning) {
				newState = { ...state };
			} else {
				if (action.payload.element === "breaker") {
					let breakerDuration = state.currentBreakTime - 1;
					if (breakerDuration < 1) {
						breakerDuration = 1;
					}
					newState = {
						...state,
						currentBreakTime: breakerDuration
					};
				} else {
					let sessionDuration = state.currentSessionTime - 1;
					if (sessionDuration < 1) {
						sessionDuration = 1;
					}
					newState = {
						...state,
						currentSessionTime: sessionDuration,
						currentTimer: sessionDuration,
						currentSeconds: "00"
					};
				}
			}
			break;
		case CHANGESECONDS:
			let session = state.sessionOrBreak;
			let ses = state.currentSessionTime;
			let seconds = Number(state.currentSeconds);
			let minutes = state.currentTimer;
			let message;

			if (minutes === 0 && seconds === 0) {
				//triggerAlarm, somehow...
				audio.play();
				session = !session;

				if (!session) {
					minutes = state.currentBreakTime;
				} else {
					minutes = ses;
				}
				seconds = "00";
			} else {
				if (seconds === 0) {
					seconds = 59;
					minutes--;
				} else if (seconds === 1) {
					seconds = 0;
				} else {
					seconds = seconds - 1;
				}
				if (seconds < 10) {
					seconds = "0" + String(seconds);
				} else {
					String(seconds);
				}
			}
			message = session ? "Session" : "Break";
			newState = {
				...state,
				sessionOrBreak: session,
				currentSeconds: seconds,
				currentTimer: minutes,
				timerLabel: message
			};
			break;
		case RESET:
			audio.pause();
			audio.currentTime = 0;
			clearInterval(window.myInterval);
			newState = {
				...state,
				currentSessionTime: 25,
				timerLabel: "Session",
				currentBreakTime: 5,
				currentTimer: 25,
				currentSeconds: "00",
				sessionOrBreak: true,
				pauseOrRunning: false,
				passes: 0
			};
			break;
		case START:
			newState = {
				...state,
				pauseOrRunning: !state.pauseOrRunning
			};
			break;
		default:
			newState = { ...state };
	}
	return newState;
};

export default reducer;
