import React from "react";

const ListItem = ({ item }) => {
	return (
		<li key={item.id} className="list-item" value={item.title}>
			{item.title} {item.artist}
		</li>
	);
};

export default ListItem;
