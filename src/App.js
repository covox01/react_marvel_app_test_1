import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App__Component">
        <Header 
          title="Marvel Comic Explorer"
          message="Search and Explore your Favourite Marvel Characters"
        />
        <Footer />
      </div>
    );
  }
}

export default App;
