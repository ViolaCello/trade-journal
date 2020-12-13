import React, { Component } from 'react';
import { connect } from 'react-redux'

class Trades extends Component {

   
      


render () { 
    return (
    <div>
    <h1 style={{padding: '10px'}}>Trades Page</h1>
  
    {this.props.trades.map(trade => <span key={trade.id}> {trade.ticker} - {trade.strategy}</span>)}
   {console.log("Props: ", this.props.trades)}
    </div>
    )
}


}

const MapStateToProps = state => {
    return {
        trades: state.trades
    }
}



export default connect(MapStateToProps)(Trades)

//  {props.map.trades(trade => <span key={trade.id}> {trade.ticker} - {trade.strategy}</span>)}