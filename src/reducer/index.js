import { INCREASE, DECREASE, START, RESET } from "../actions/actions";

const reducer = (state, action) => {
	const actionData = action.type;
	let newState;
	switch (actionData) {
		case INCREASE:
			break;
		case DECREASE:
			break;
		case START:
			break;
		case RESET:
			break;
		default:
			newState = { ...state };
	}
	return newState;
};

export default reducer;
