import React from 'react'
import Navbar from './Navbar'
import {Route, Switch} from 'react-router-dom'
import Trades from './Trades'
import TradeInput from './TradeInput'
import Stats from './Stats'
import Show from './Show'
import Market from './Market'
import Welcome from './Welcome'


const Home = props => {
   
return (
    <div>
     
   
    
    <div className="market"  >
    <Market />
    </div>
    <div className="welcome">
    <Navbar/>
    <h3>You're current total profit is: ${props.totalProfit}</h3>
   


      <Switch>
      



      <Route path='/trades/new' component={TradeInput}/>

      <Route exact path='/trades' component={Trades} />

      <Route path='/trades/stats' render={() => <Stats  trades={props.trades}/>}/>

      <Route exact path='/trades/:id' render={(routerProps) => <Show {...routerProps} trades={props.trades}/>}/>
      <Welcome />
      </Switch>
      </div>
    </div>
    )}


// 

  export default Home
// export default connect(mapStateToProps)(Home)

//{props.trades.map(trade => <span key={trade.id}> {trade.ticker} - {trade.strategy}</span>)}

//   