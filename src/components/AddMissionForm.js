import React from "react";

class AddMissionForm extends React.Component {
	nameRef = React.createRef();
	descRef = React.createRef();

	createMission = event => {
		// 1. stop the form from submitting
		event.preventDefault();
		console.log("event", event);
		const mission = {
			name: this.nameRef.current.value,
			desc: this.descRef.current.value
		};
		this.props.addMission(mission);
		// refresh the form
		event.currentTarget.reset();
	};
  render () {
    return (
			<form className="mission-edit" onSubmit={this.createMission}>
				<input name="name" ref={this.nameRef} type="text" placeholder="Name" />
				<textarea name="desc" ref={this.descRef} placeholder="Desc" />
				<button className="button" type="submit">+ Add Mission</button>
			</form>
    );
  }
}

export default AddMissionForm;