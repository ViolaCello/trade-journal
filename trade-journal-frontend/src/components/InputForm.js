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
               <h1> Input Form</h1>


            </div>
            )
        
    }


}

export default connect(null, { addTrade })(InputForm);