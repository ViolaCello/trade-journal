import React from 'react'
import Navbar from './Navbar'


const Home = props => {

return (
    <div>
    <Navbar/>
        {props.trades.map(trade => <span key={trade.id}> {trade.ticker} - {trade.strategy}</span>)}
    </div>
)
}

export default Home