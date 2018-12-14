import React, { Component } from 'react';

class CharacterList extends Component {
	constructor(props){
		super(props);
		this.state = {
			characters: [{
				name: 'batman'
			}]
		};
	}

	renderCharacters(){
		return (<p>My character list placeholder</p>);
	}

	renderEmptyState(){
		return (<p>Loading ...</p>);
	}

	render() {
		return (
			<section className="CharacterList__Component">
				<h2>Characters List</h2>
				{this.state.characters.length ? this.renderCharacters() : this.emptyState()}
			</section>
		);
	}
}

export default CharacterList;