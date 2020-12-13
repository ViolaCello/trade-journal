import logo from './logo.svg';
import './App.css';
import React from 'react'
import fetchTrades from './actions/fetchTrades'
import { connect } from 'react-redux'





class App extends React.Component {

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
  componentDidMount() {
   this.props.fetchTrades()
   console.log(this.props.trades)
    // fetch('http://localhost:3001/trades')
    // .then(response => response.json())
    // .then(astronauts => console.log(astronauts));
  };
  
 

}

const mapStateToProps = state => {
  return {trades: state.trades}
}

export default connect(mapStateToProps, { fetchTrades }) (App);
