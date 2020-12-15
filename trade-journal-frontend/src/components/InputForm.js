import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTrade } from '../actions/addTrade'
import { withRouter } from 'react-router-dom'



class InputForm extends Component {

state = {
    ticker:'',
    strategy:'',
    newStrategy:'',
    date:'',
    profit:0,
    risk:0,
    notes:''
    
}


handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTrade(this.state)
    this.setState({
        ticker:'',
        strategy:'',
        date:'',
        profit:0,
        risk:0,
        notes:'',
        newStrategy:''
    })
     this.props.history.push("/trades");
    

  }

    render(props) {
        return (
            <div>
            {console.log("InputForm: ", this.props)}
                <h1> Input Form</h1>
                <form onSubmit={this.handleSubmit}>

                <label>Ticker Symbol: </label><br />
                <input type="text" name="ticker" value={this.state.ticker} onChange={this.handleChange} required/><br /><br />


                <label>Date of Trade: </label><br />
                <input type="date" name="date" value={this.state.date} onChange={this.handleChange} required/><br /><br />

                <label>Strategy: </label><br />
                <select required name="strategy" value={this.state.strategy} onChange={this.handleChange} >
                <option>--New Strategy--</option>
                {this.props.uniqStrategies.map(strat => <option>{strat}</option>)}
                 </select><br /><br />
                {(this.state.strategy==="--New Strategy--") ? 
                        <span>
                    <label>Enter New Strategy Name: </label>
                    <input type="text" name="newStrategy" value={this.state.newStrategy} onChange={this.handleChange} required/><br /><br />
                    </span>
                : null }
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

export default withRouter(connect(null, { addTrade })(InputForm));