import React, { Component } from 'react';
import './FilterBar.scss';

class FilterBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchQuery: ""
		}
	}

	handleSearchChange = (event) => {
		console.log(event.target.value)
		this.setState({
			searchQuery: event.target.value
		});
	}

	handleFormSubmit = (event) => {
		event.preventDefault();

		this.props.onFilterSubmit(this.state.inputValue);

		console.log(this.state.inputValue);

	}

	render() {
		return (
			<div className="FilterBar__Component">
	            <form>
	              <label className="visually-hidden" htmlFor="search">
	                Search Characters:
	              </label>
	              <input type="text" 
	              		 placeholder="Search characters" 
	              		 id="search" 
	              		 searchQuery={this.state.searchQuery} 
	              		 onChange={this.handleSearchChange}/>
	              <button type="submit">Submit</button>
	            </form>
	        </div>
		);
	}
}

export default FilterBar;