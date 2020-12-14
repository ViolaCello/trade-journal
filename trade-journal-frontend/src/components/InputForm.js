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


    render() {
        return (
            <div>
            {console.log("InputForm: ", this.state)}
                <h1> Input Form</h1>
                <form onSubmit={this.handleSubmit}>

                <label>Ticker Symbol: </label>
                <input type="text" name="ticker" value={this.state.ticker} onChange={this.handleChange}/>

                </form>
            </div>
            )
        
    }


}

export default connect(null, { addTrade })(InputForm);