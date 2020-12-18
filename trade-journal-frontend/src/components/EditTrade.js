import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editTradeAction} from '../actions/editTradeAction'
import { withRouter } from "react-router";


class EditTrade extends Component {



state = {
    id: this.props.trade.id,
    ticker:this.props.trade.ticker,
    strategy:this.props.trade.strategy,
    newStrategy:'',
    date:this.props.trade.date,
    profit:this.props.trade.profit,
    risk: this.props.trade.risk,
    notes:this.props.trade.notes
}


handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.editTradeAction(this.state, this.props.history)
    // no need to set the state back to blank because if there are errors I want to not have to re-fill the entire page again
   //  this.props.history.push("/trades");  --> the redirect will happen in the addTrade function and trigger only if the database sends no errors
    

  }

    render(props) {
        console.log("This should be the ID: ", this.state.id)
            // debugger
        return (
            <div>
            {console.log("InputForm: ", this.props.history)}
                <h1> Input Form</h1>
                <form onSubmit={this.handleSubmit}>

                <label>Ticker Symbol: </label><br />
                <input type="text" name="ticker" value={this.state.ticker} onChange={this.handleChange} required/><br /><br />


                <label>Date of Trade: </label><br />
                <input type="date" name="date" value={this.state.date} onChange={this.handleChange} required/><br /><br />




               


                <label>Risk: </label><br />
                <input type="number" name="risk" value={this.state.risk} onChange={this.handleChange} /><br /><br />

                <label>Profit/Loss </label><br />
                <input type="number" name="profit" value={this.state.profit} onChange={this.handleChange} /><br /><br />

                <label>Notes: </label><br />
                <textarea name="notes" value={this.state.notes} onChange={this.handleChange}/><br /><br />

                <input type="submit" value="Add Trade" />

                </form>
            </div>
            )
        
    }


}

export default withRouter(connect(null, { editTradeAction })(EditTrade));





// <label>Strategy: </label><br />
// <select required name="strategy" value={this.state.strategy} onChange={this.handleChange} >
// <option>--New Strategy--</option>
// {this.props.uniqStrategies.map(strat => <option key={strat}>{strat}</option>)}
//  </select><br /><br />
// {(this.state.strategy==="--New Strategy--") ? 
//         <span>
//     <label>Enter New Strategy Name: </label>
//     <input type="text" name="newStrategy" value={this.state.newStrategy} onChange={this.handleChange} required/><br /><br />
//     </span>
// : null }
