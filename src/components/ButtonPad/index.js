import React, { Component } from "react";
import { connect } from "react-redux";

class ButtonPad extends Component {
	render = () => {
		let item = this.props.item;
		return (
			<div className="button-pad">
				<h3 className="title" id={item.label}>
					{item.length}
				</h3>
				<div className="digital-pad" id={item.len}>
					{item.defaultValue}
				</div>
				<button className="inc-button" id={item.inc} />
				<button className="inc-button" id={item.dec} />
			</div>
		);
	};
}

export default connect(null)(ButtonPad);
