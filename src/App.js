import React, { Component } from 'react';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import IndexPage from './pages/Index'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="grid">
          <Navbar />
        </header>
        <div role="main">
          <IndexPage />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
