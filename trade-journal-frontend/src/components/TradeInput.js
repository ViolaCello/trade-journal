import React, { Component } from 'react'
import { connect } from 'react-redux'
import InputForm from './InputForm'


class TradeInput extends Component {

render ()  {
    return (
        <div>
        <h2>TradeInput Page</h2>
        You currently have these {this.props.uniqStrategies.length} trade strategies:
         {this.props.uniqStrategies.map(strats => <li> {strats}</li>)}
         <InputForm />
        </div>
    )}
    }

    const mapStateToProps = state => {
        return  {
            uniqStrategies : state.uniqStrategies
         }
        
    }

    export default connect(mapStateToProps)(TradeInput)