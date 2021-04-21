import React from "react";

class Mission extends React.Component {
  render () {
		const { name, desc } = this.props.details;
    return (
			<li className="menu-mission">
				<h3 className="mission-name">{name}</h3>
				<span className="mission-desc">{desc}</span>
			</li>
		);
  }
}

export default Mission;