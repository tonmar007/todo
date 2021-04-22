import React from "react";
import Mission from "./Mission";
import TodoList from "./TodoList";

class App extends React.Component {
	state = {
		missions: {}
	};

	addMission = mission => {
		// 1. Take a copy of the existing state
		const missions = { ...this.state.missions };
		// 2. Add our new mission to that missions variable
		missions[`mission${Date.now()}`] = mission;
		// 3. Set the new missions object to state
		this.setState({ missions });
	};

	// updateMission = (key, updatedMission) => {
	// 	// 1. Take a copy of the current state
	// 	const missions = { ...this.state.missions };
	// 	// 2. Update that state
	// 	missions[key] = updatedMission;
	// 	// 3. Set that to state
	// 	this.setState({ missions });
	// };

	deleteMission = key => {
		// 1. Take a copy of state
		const missions = { ...this.state.missions };
		// 2. Update the state
		missions[key] = null;
		// 3. Update state
		this.setState({ missions });
	};

  render() {
		return (
			<div className="menu">
				<ul className="missions">
					<header><h1>TODO</h1></header>
					{Object.keys(this.state.missions).map(key => (
						<Mission 
							key={key}
							details={this.state.missions[key]} 
						/>
					))}
					<TodoList 
						addMission={this.addMission}
						deleteMission={this.deleteMission}
						missions={this.state.missions}
					/>
				</ul>
			</div>
		);
  }
}

export default App;