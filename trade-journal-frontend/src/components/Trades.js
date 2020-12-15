import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Route, Link} from 'react-router-dom'  
import Show from './Show'

class Trades extends Component {

   
      


render () { 
    return (
    <div>
    <h1 style={{padding: '10px'}}>Trades Page</h1>
  <ul>
    {this.props.trades.map(trade =>
     <li key={trade.id}>
     
     <Link to={`/trades/${trade.id}`}>{trade.ticker} - {trade.strategy}</Link>
     </li>)}
   {console.log("Props: ", this.props.totalTrades)}
   </ul>
    </div>
    )
}


}

const mapStateToProps = state => {
    return {
        trades: state.trades,
      totalTrades: state.totalTrades
    }
}



export default connect(mapStateToProps)(Trades)

//  {props.map.trades(trade => <span key={trade.id}> {trade.ticker} - {trade.strategy}</span>)}