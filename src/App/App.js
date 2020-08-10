import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>React Hoarder</h2>
        <button className="btn btn-info"><i className="fas fa-hard-hat"></i> I am a button <i className="fas fa-hard-hat"></i></button>
      </div>
    );
  }
}

export default App;
