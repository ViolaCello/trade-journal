import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTrade } from '../actions/addTrade'

class InputForm extends Component {

state = {
    ticker:'',
    strategy:'',
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
        notes:''
    })
  }


    render(props) {
        return (
            <div>
            {console.log("InputForm: ", this.props.uniqStrategies, this.state)}
                <h1> Input Form</h1>
                <form onSubmit={this.handleSubmit}>

                <label>Ticker Symbol: </label><br />
                <input type="text" name="ticker" value={this.state.ticker} onChange={this.handleChange}/><br /><br />


                <label>Date of Trade: </label><br />
                <input type="date" name="date" value={this.state.date} onChange={this.handleChange}/><br /><br />

                <label>Strategy: </label><br />
                <select name="strategy" value={this.state.strategy} onChange={this.handleChange}>
                {this.props.uniqStrategies.map(strat => <option>{strat}</option>)}
               
                </select><br /><br />

                <label>Ticker Symbol: </label><br />
                <input type="text" name="ticker" value={this.state.ticker} onChange={this.handleChange}/>

                </form>
            </div>
            )
        
    }


}

export default connect(null, { addTrade })(InputForm);