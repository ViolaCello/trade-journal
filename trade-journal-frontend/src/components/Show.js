import React from 'react'
import {connect} from 'react-redux'
import {deleteTrade} from '../actions/deleteTrade' 
import { withRouter } from 'react-router-dom'
import TradeInput from './TradeInput'
 
 class Show extends React.Component {

   

 handleDelete = (trade) => {
   //  debugger
    this.props.deleteTrade(trade.id, this.props.history)
    this.props.history.push("/trades")
  }

  handleEdit = (trade) => {
    console.log("Edit Clicked", trade)
    let tradeId = trade.id
    let insert = `
      <div>
    <TradeInput tradeId={tradeId} />
    </div>
    `
    let findSpot = document.querySelector('.edithere')
   
    
   }

render() {

    // let t = parseInt(props.match.params.id)
    let trade = this.props.trades.filter(data => data.id == this.props.match.params.id)[0]


 //  {console.log("Show Page", props)}

 



    return (
    <div>
    
   <h2> Show Page - Trade # {trade.id} </h2>
   <p>Symbol: <span>{trade.ticker}</span></p>
   <p>Date: {trade.date}</p>
   <p>Strategy: {trade.strategy}</p>
   <p>Profit/Loss: {trade.profit}</p>
   <p>Return on Risk: {trade.ror}</p>
   <p>Notes: {trade.notes}</p>  

        <button className="delete" onClick={() => this.handleDelete(trade)}>Delete</button>
        <button onClick={() => this.handleEdit(trade)}>Edit</button>
      <div className="edithere"></div>
    </div> 
    )
}

}

export default withRouter(connect(null, { deleteTrade })(Show))