// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import fetchTrades from './actions/fetchTrades'
import { connect } from 'react-redux'





class App extends React.Component {

render() {
  return (
    <div>
      
        {this.props.trades.map(trade => <span key={trade.id}> {trade.ticker} - {trade.strategy}</span>)}
        
    </div>
  );
}
  componentDidMount() {
   this.props.fetchTrades()
   console.log("In App: ", this.props.trades)
    // fetch('http://localhost:3001/trades')
    // .then(response => response.json())
    // .then(astronauts => console.log(astronauts));
  };
  
 

}

const mapStateToProps = state => {
  return {trades: state.trades}
}

export default connect(mapStateToProps, { fetchTrades }) (App);
