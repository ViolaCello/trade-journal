// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import fetchTrades from './actions/fetchTrades'
import { connect } from 'react-redux'
import Home from './components/Home'





class App extends React.Component {

render() {
  return (
    <div>
      <Home trades={this.props.trades} totalTrades={this.props.totalTrades} totalProfit={this.props.totalProfit} />
    
    </div>
  );
}
  componentDidMount() {
   this.props.fetchTrades()
   console.log("In App: ", this.props.trades, "Uniqu:", this.props.uniqStrategies)
    // fetch('http://localhost:3001/trades')
    // .then(response => response.json())
    // .then(astronauts => console.log(astronauts));
  };
  
 

}

const mapStateToProps = state => {
  return {trades: state.trades,
          totalTrades: state.totalTrades,
          totalProfit: state.totalProfit,
          uniqStrategies: state.uniqStrategies
        }
}

export default connect(mapStateToProps, { fetchTrades }) (App);

//   {this.props.trades.map(trade => <span key={trade.id}> {trade.ticker} - {trade.strategy}</span>)}