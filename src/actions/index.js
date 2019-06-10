import { INCREASE, DECREASE, START, RESET, CHANGESECONDS } from "./actions";

export const increase = element => {
	return {
		type: INCREASE,
		payload: {
			element: element
		}
	};
};
export const decrease = element => {
	return {
		type: DECREASE,
		payload: {
			element: element
		}
	};
};
export const start = () => {
	return {
		type: START
	};
};
export const reset = () => {
	return {
		type: RESET
	};
};
export const changeSeconds = () => {
	return {
		type: CHANGESECONDS
	};
};
/*

let minutes = 5;
	let seconds = 59;

	const secondsCount = (minutes, seconds) => {
		console.log("0" + minutes + ":00");
		let myInterval = setInterval(() => {
			if (seconds === 59) {
				minutes = minutes - 1;
			}
			if (minutes === -1) {
				clearInterval(myInterval);
				return minutes;
			}
			console.log(
				(minutes < 10 ? "0" + minutes : minutes) +
					":" +
					(seconds < 10 ? "0" + seconds : seconds)
			);
			seconds = seconds - 1;
			if (seconds === -1) {
				seconds = 59;
			}
		}, 1000);
	};

	secondsCount(minutes, seconds);
	*/
