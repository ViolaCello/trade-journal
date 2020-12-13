import React from 'react'
import Navbar from './Navbar'
import {Route, Switch} from 'react-router-dom'
import Trades from './Trades'
import TradeInput from './TradeInput'
import Stats from './Stats'


const Home = props => {
   
return (
    <div>
    <Navbar/>
      <Switch>
      <Route path='/trades/new' component={TradeInput}/>

      <Route path='/trades' component={Trades} />

      <Route path='/trades/stats' component={Stats}/>
      </Switch>
      {console.log("In Home ", props)}
    </div>
    )}





  
 export default Home

//{props.trades.map(trade => <span key={trade.id}> {trade.ticker} - {trade.strategy}</span>)}