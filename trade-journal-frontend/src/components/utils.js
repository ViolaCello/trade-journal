import React, { Component } from 'react'
import { connect } from 'react-redux'

class Utils extends Component {

    sumProfit = () => {
    let profitsArray = []
    action.payload.map(array => profitsArray.push(array.profit))
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return profitsArray.reduce(reducer).toFixed(2)}

}

const mapStateToProps = state => {
    return {
        trades: state.trades
    }
}

export default connect(MapStateToProps)(Utils)