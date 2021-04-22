import React from "react";
import EditMissionForm from "./EditMissionForm";
import AddMissionForm from "./AddMissionForm";

class TodoList extends React.Component {
  render () {
    return (
      <div className="todo-list">
        <h2>Todo List</h2>
        {Object.keys(this.props.missions).map(key => (
          <EditMissionForm 
            key={key}
            index={key} 
            mission={this.props.missions[key]}
            deleteMission={this.props.deleteMission}
          />
        ))}
        <AddMissionForm addMission={this.props.addMission} />
      </div>
    );
  }
}

export default TodoList;