import React, { Component } from "react";
import { connect } from "react-redux";
import { increase, decrease } from "../../actions";

class ButtonPad extends Component {
	element = this.props.item.label === "break-label" ? "breaker" : "session";
	label =
		this.element === "breaker"
			? this.props.currentBreakTime
			: this.props.currentSessionTime;

	render = () => {
		let item = this.props.item;

		return (
			<div className="button-pad">
				<h3 className="title" id={item.label}>
					{item.length}
				</h3>
				<div className="digital-pad digital">
					<p className="digit" id={item.len}>
						{this.element === "breaker"
							? this.props.currentBreakTime
							: this.props.currentSessionTime}
					</p>
				</div>
				<div className="button-pad-container">
					<button
						className="ind-button dec"
						id={item.dec}
						onClick={() => {
							return this.props.decrease(this.element);
						}}>
						<i className="caret left icon" />
					</button>
					<button
						className="ind-button inc"
						id={item.inc}
						onClick={() => {
							return this.props.increase(this.element);
						}}>
						<i className="caret right icon" />
					</button>
				</div>
			</div>
		);
	};
}
const mapStateToProps = (state, props) => {
	return {
		currentSessionTime: state.currentSessionTime,
		currentBreakTime: state.currentBreakTime
	};
};
export default connect(
	mapStateToProps,
	{ increase, decrease }
)(ButtonPad);
