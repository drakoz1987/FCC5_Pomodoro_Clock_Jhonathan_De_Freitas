import { INCREASE, DECREASE, START, RESET } from "./actions";

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
