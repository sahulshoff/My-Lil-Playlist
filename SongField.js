import React, { Component } from "react";

class SongField extends Component {
	constructor() {
		super();
		this.state = {
			input: ""
		};
	}

	render() {
		const handleChange = event => {
			this.setState({
				input: event.target.name.value
			});
		};

		const onSubmit = e => {
			e.preventDefault();

			alert("Hij doet het");
		};

		return (
			<form onSubmit={onSubmit}>
				<input
					type="text"
					value={this.state.input}
					name="title"
					placeholder="Song Title"
					onChange={handleChange}
				/>

				<input
					type="text"
					value={this.state.input}
					name="artist"
					placeholder="Artist"
					onChange={handleChange}
				/>

				<select value={this.state.input} onChange={handleChange} name="genre">
					<option value="Jazz">Jazz</option>
					<option value="Blues">Blues</option>
					<option value="Rock">Rock</option>
					<option value="HipHop">HipHop</option>
				</select>

				<select value={this.state.input} onChange={handleChange} name="rating">
					<option value="1Star">1</option>
					<option value="2Star">2</option>
					<option value="3Star">3</option>
					<option value="4Star">4</option>
					<option value="5Star">5</option>
				</select>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

export default SongField;
