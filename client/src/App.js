import React, { Component } from 'react';
import './App.css';
import StoryList from './Components/StoryList';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <StoryList />
      </div>
    );
  }
}

export default App;