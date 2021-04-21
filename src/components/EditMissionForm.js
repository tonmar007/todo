import React from "react";

class EditMissionForm extends React.Component {
	render () {
		return (
			<div className="mission-edit">
				<button onClick={() => this.props.deleteMission(this.props.index)}>
					Remove Mission
				</button>
			</div>
		);
	}
}

export default EditMissionForm;