import React from 'react'
import {connect} from 'react-redux'
import {deleteTrade} from '../actions/deleteTrade' 
 
 class Show extends React.Component {


 handleDelete = (trade) => {
    this.props.deleteTransaction(trade.id)
  }



render() {

    // let t = parseInt(props.match.params.id)
    let trade = this.props.trades.filter(data => data.id == this.props.match.params.id)[0]

 //  {console.log("Show Page", props)}

 



    return (
    <div>
    
   <h2> Show Page - Trade #{trade.id} </h2>
   <p>Symbol: <span>{trade.ticker}</span></p>
   <p>Date: {trade.date}</p>
   <p>Strategy: {trade.strategy}</p>
   <p>Profit/Loss: {trade.profit}</p>
   <p>Return on Risk: {trade.ror}</p>
   <p>Notes: {trade.notes}</p>  

        <button className="delete">Delete</button>
        <button>Edit</button>

    </div> 
    )
}

}

export default Show