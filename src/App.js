import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FilterBar from './components/FilterBar';
import './App.scss';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onFilterSubmit = (searchQuery) => {
    console.log("In app.js" + searchQuery);
  }

  render() {
    return (
      <div className="App__Component">
        <Header 
          title="Marvel Comic Explorer"
          message="Search and Explore your Favourite Marvel Characters"
          onFilterSubmit={this.onFilterSubmit}
        />
        <Footer />
      </div>
    );
  }
}

 

export default App;
