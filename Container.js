import React, { Component } from "react";
import SongField from "./SongField";
import SongList from "./SongList";

class Container extends Component {
	constructor() {
		super();
		this.state = {
			songInput: "",
			songs: [
				{
					id: 1,
					title: "Cool Song",
					artist: "Cool Singer",
					genre: "",
					rating: ""
				}
			]
		};
	}

	render() {
		// const addSong = song => {
		// 	const item = { id: this.state.songs.length + 1, title: song };

		// 	this.setState({ songs: this.state.songs.concat(item) });
		// };

		return (
			<div className="container">
				<div className="song-input">
					<SongField />
				</div>

				<div className="lists">
					<div className="songlist">
						<h1>Song</h1>
						<SongList SongItem={this.state.songs} />
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
