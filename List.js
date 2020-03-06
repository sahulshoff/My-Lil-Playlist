import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const { items } = this.props;
		const ListItems = items.map(item => (
			<ListItem
				key={item.id}
				className="list-item"
				item={item}

				// onClick={item.handleOnclick}
			/>
		));

		return (
			<div className="uldiv">
				<ul className="ulList">{ListItems}</ul>
			</div>
		);
	}
}

export default List;
