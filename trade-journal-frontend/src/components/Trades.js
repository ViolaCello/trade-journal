import React, { Component, useImperativeHandle } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'  
class Trades extends Component {


state = {
  toggle: false
}

handleToggle = () => {
  this.setState(prevState => ({
    toggle : !prevState.toggle
  })
  )
}


alphaSort = () => {
  
  return (
  [...this.props.trades].sort(function(a, b) {
    let nameA = a.ticker.toUpperCase(); // ignore upper and lowercase
    let nameB = b.ticker.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  }));
}



render () { 

    return (
    <div>
    <h1 style={{padding: '10px'}}>Trades</h1>
  <ul>
    {(this.state.toggle ? this.alphaSort() : this.props.trades).map(trade =>
     <li key={trade.id}>
     
     <Link to={`/trades/${trade.id}`}>{trade.ticker} - {trade.strategy}</Link>
     </li>)}
   </ul>
   <button onClick={this.handleToggle}>Alphabetize</button>
    </div>
    )
}


}

const mapStateToProps = state => {
    return {
        trades: state.trades,
    }
}



export default connect(mapStateToProps)(Trades)

//  {props.map.trades(trade => <span key={trade.id}> {trade.ticker} - {trade.strategy}</span>)}