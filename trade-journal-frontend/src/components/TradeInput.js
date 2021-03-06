import React, { Component } from 'react'
import { connect } from 'react-redux'
import InputForm from './InputForm'
import { uniqStrategies } from './Utilities'


class TradeInput extends Component {

render ()  {
    return (
        <div>
        <h2>Enter New Trade Here</h2>
        You currently have these {uniqStrategies(this.props.trades).length} trade strategies:
         {uniqStrategies(this.props.trades).map(strats => <li key={strats}> {strats}</li>)}
         <InputForm history={this.props.history} uniqStrategies={uniqStrategies(this.props.trades)}/>
       
        </div>
    )}
    }

    const mapStateToProps = state => {
        return  {
            trades : state.trades
         }
        
    }

    export default connect(mapStateToProps)(TradeInput)