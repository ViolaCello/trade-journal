import React from 'react'
import Navbar from './Navbar'
import {Route, Switch} from 'react-router-dom'
import Trades from './Trades'
import TradeInput from './TradeInput'
import Stats from './Stats'
import Show from './Show'
// import { connect } from 'react-redux'


const Home = props => {
   
return (
    <div>
     
    <Navbar/>
      <Switch>
    

      <Route path='/trades/new' component={TradeInput}/>

      <Route exact path='/trades' component={Trades} />

      <Route path='/trades/stats' component={Stats}/>

      <Route path='/trades/:id' render={(routerProps) => <Show {...routerProps} trades={props.trades}/>}/>
   
      </Switch>
      <h3>You're current total profit is: ${props.totalProfit}</h3>
    </div>
    )}


// const mapStateToProps = state => {
//   return {
//     trades : state.trades
//   }
// }


  export default Home
// export default connect(mapStateToProps)(Home)

//{props.trades.map(trade => <span key={trade.id}> {trade.ticker} - {trade.strategy}</span>)}