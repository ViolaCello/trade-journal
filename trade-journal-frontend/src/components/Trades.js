import React, { Component } from 'react';
import { connect } from 'react-redux'

class Trades extends Component {

   
      


render () { 
    return (
    <div>
    <h1 style={{padding: '10px'}}>Trades Page</h1>
  <ul>
    {this.props.trades.map(trade => <li key={trade.id}> {trade.ticker} - {trade.strategy}</li>)}
   {console.log("Props: ", this.props.totalTrades)}
   </ul>
    </div>
    )
}


}

const MapStateToProps = state => {
    return {
        trades: state.trades,
      totalTrades: state.totalTrades
    }
}



export default connect(MapStateToProps)(Trades)

//  {props.map.trades(trade => <span key={trade.id}> {trade.ticker} - {trade.strategy}</span>)}