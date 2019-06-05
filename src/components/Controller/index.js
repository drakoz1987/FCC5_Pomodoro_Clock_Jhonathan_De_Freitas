import React from "react";
import ButtonPad from "../ButtonPad";
import { connect } from "react-redux";

const Controller = props => {
	return (
		<div className="controller">
			<ButtonPad item={props.session} />
			<ButtonPad item={props.breaker} />
		</div>
	);
};

const mapStateToProps = state => {
	return { session: state.session, breaker: state.breaker };
};

export default connect(mapStateToProps)(Controller);
