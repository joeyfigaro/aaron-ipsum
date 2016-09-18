import React, { Component } from 'react';
import { seeds } from './language/seeds';
import generator from 'lorem-ipsum';
import Form from './Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1>Aaron Ipsum</h1>
        </header>
        <main className="generator">
					<Form generate={generator} seeds={seeds} />
        </main>
      </div>
    );
  }
}

export default App;
