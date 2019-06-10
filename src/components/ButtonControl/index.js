import React, { Component } from "react";
import { connect } from "react-redux";
import { reset, start, changeSeconds } from "../../actions";
//<i class="pause icon"></i>
//<i class="play icon"></i>
//<i class="redo icon"></i>
class ButtonControl extends Component {
	render = props => {
		let icon, funct;
		//let actionToUse;
		if (this.props.id === "reset") {
			icon = "redo icon";
			funct = this.props.reset;
		} else {
			if (this.props.pauseOrRunning) {
				icon = "pause icon";
			} else {
				icon = "play icon";
			}
			funct = () => {
				if (!this.props.pauseOrRunning) {
					console.log(this.props.passes);
					if (this.props.passes === 1) {
						console.log("here");
						this.props.reset();
					}
					this.props.start();
					window.myInterval = setInterval(this.props.changeSeconds, 50);
				} else {
					this.props.start();
					clearInterval(window.myInterval);
				}
			};
		}

		return (
			<button className="button-control" id={this.props.id} onClick={funct}>
				<i className={icon} />
			</button>
		);
	};
}

const mapStateToProps = state => {
	return {
		sessionOrBreak: state.sessionOrBreak,
		currentSessionTime: state.currentSessionTime,
		currentBreakTime: state.currentBreakTime,
		pauseOrRunning: state.pauseOrRunning,
		passes: state.passes
	};
};
export default connect(
	mapStateToProps,
	{ reset, start, changeSeconds }
)(ButtonControl);
