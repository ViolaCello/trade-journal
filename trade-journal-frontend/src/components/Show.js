import React from 'react'
import {connect} from 'react-redux'
import {deleteTrade} from '../actions/deleteTrade' 
import { withRouter } from 'react-router-dom'
import EditTrade from './EditTrade'
 
 class Show extends React.Component {

   state = {
     edit: false
   }

 handleDelete = (trade) => {
   //  debugger
    this.props.deleteTrade(trade.id, this.props.history)
    this.props.history.push("/trades")
  }

editRender = (trade) => {
  if (this.state.edit) {
    return (
      <div>  <EditTrade trade={trade} data={this.props.trades} toggleEditOff={this.toggleEditOff}/></div>
         )
  } else {
    return null
  }
}

  handleEdit = () => {
    this.setState(
     {
        edit: true
      }
    )

   }

   toggleEditOff = () => {
     this.setState(
       {
         edit: false
       }
     )
   }

render() {

    // let t = parseInt(props.match.params.id)
    let trade = this.props.trades.filter(data => data.id == this.props.match.params.id)[0]


  



    return (
    <div>
    
   <h2> Show Page - Trade # {trade.id} </h2>
   <p>Symbol: <span>{trade.ticker}</span></p>
   <p>Date: {trade.date}</p>
   <p>Strategy: {trade.strategy}</p>
   <p>{(trade.result) ? <span className="profit">Profit ${trade.profit}</span>: <span className="loss">Loss ${trade.profit}</span>} </p>
   <p>Return on Risk: {trade.ror}</p>
   <p>Notes: {trade.notes}</p>  

        <button className="delete" onClick={() => this.handleDelete(trade)}>Delete</button>
        <button onClick={() => this.handleEdit(trade)}>Edit</button>
      <div className="edithere"></div>
    { this.editRender(trade)}
    </div> 
    )
}

}

export default withRouter(connect(null, { deleteTrade })(Show))