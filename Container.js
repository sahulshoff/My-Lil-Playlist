import React, { Component } from "react";
import SongField from "./SongField";
import SongList from "./SongList";

class Container extends Component {
	constructor() {
		super();
		this.state = {
			songTitles: [{ id: 1, title: "Cool Song" }]
		};
	}

	render() {
		return (
			<div className="container">
				<div className="song-input">
					<SongField />
				</div>

				<div className="lists">
					<div className="songlist">
						<h1>Song</h1>
						<SongList SongItem={this.state.songTitles} />
					</div>

					<h1>Artist</h1>
					<h1>Genre</h1>
					<h1>Rating</h1>
				</div>
			</div>
		);
	}
}

export default Container;
