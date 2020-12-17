import React from 'react'
import Strategy from './Strategy'
import Stocks from './Stocks'

class Stats extends React.Component {

state = {
    stat : false,
    stok : false
}


toggle = () => {
    console.log("Hi", this.state)
   if (this.state.stat) {
     return (
   <div> <Strategy trades={this.props.trades} /> </div>
      )
   }
       else if (this.state.stok){
           return (<div> <Stocks trades={this.props.trades} /> </div> )
       }
   }

   handleClick = (event) => {
       console.log("handleClick:", event.target.name)
       switch(event.target.name) {
       case "stratButton":
           console.log("STRATTTTTTTT", event.target.name==="stratButton")
       this.setState((state)=>{
        return   {
        stat: true,
           stok: false}
        } )
        break;
        case "stockButton":
            console.log("NOOOOOOOO")
            this.setState((state)=>{
                return   {
                stat: false,
                   stok: true}
                } )
             default: 
             return null
       }
    }
   

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