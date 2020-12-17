import React from 'react'
import Strategy from './Strategy'
import Stocks from './Stocks'

class Stats extends React.Component {

state = {
    stat : true,
    stok : false
}


toggle = () => {
    console.log("Hi")
   if (this.state.stat) {
     return (
   <div> <Strategy trades={this.props.trades} /> </div>
      )
   }
       else {
           return <div> <Stocks trades={this.props.trades} /> </div>
       }
   }

   handleClick = (event) => {
       console.log("handleClick:", event)
       this.setState({
           stat: false,
           stok: true
        }
       )}
   

render() {
    return (
        <div>Stats Page
        

        <button name="stratButton" onClick={this.handleClick }>By Strategy</button>
        <button name="stockButton" onClick={this.handleClick }>By Stock</button>
   { this.toggle()}
       

        </div>
    )}
    
    }

    export default Stats