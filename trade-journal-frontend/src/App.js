// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import fetchTrades from './actions/fetchTrades'
import { connect } from 'react-redux'
import Home from './components/Home'
import { sumProfits } from './components/Utilities'





class App extends React.Component {


  componentDidMount() {
    const getTrades =  async() => {
     await this.props.fetchTrades()
    }
    getTrades()
  }
 

render() {

  console.log("In App, Sum Profits:", sumProfits(this.props.trades))
  console.log("In App, Props :", this.props.trades)

  return (
    <div>
      <Home trades={this.props.trades} totalTrades={this.props.totalTrades} totalProfit={sumProfits(this.props.trades)} />
     
    </div>
  );
}
  
   
  
  
   // console.log("In App: ", this.props.trades, "Uniqu:", this.props.uniqStrategies)
    // fetch('http://localhost:3001/trades')
    // .then(response => response.json())
    // .then(astronauts => console.log(astronauts));
  };
  
 



const mapStateToProps = state => {
  return {trades: state.trades,
          totalTrades: state.totalTrades,
          totalProfit: state.totalProfit,
          uniqStrategies: state.uniqStrategies
        }
}

export default connect(mapStateToProps, { fetchTrades }) (App);

//   {this.props.trades.map(trade => <span key={trade.id}> {trade.ticker} - {trade.strategy}</span>)}