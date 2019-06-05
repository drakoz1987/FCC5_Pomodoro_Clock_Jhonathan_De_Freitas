import React, { Component } from "react";

class ButtonControl extends Component {
	render = props => {
		return (
			<button className="button-control" id={this.props.id}>
				{this.props.name}
			</button>
		);
	};
}
export default ButtonControl;
