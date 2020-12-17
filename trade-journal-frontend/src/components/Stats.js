import { uniqStrategies,  profitPerStrat, uniqStocks, profitPerStock } from './Utilities'


const Stats = (props) => {
    return (
        <div>Stats Page
        
        <div>A trade: {props.trades.map(trade => <span>{trade.ror}</span>)} 
        <br /><br /><br /><br/></div>
        <h2>Profits Per Strategy</h2>
        <h5>Strategy - Profit</h5>
       <div> {uniqStrategies(props.trades).map(strats => <li key={strats}> {strats} - ${profitPerStrat(props.trades, strats)}</li>)}</div>
    
       <h2>Profits Per Stock</h2>
        <h5>Stock - Profit</h5>
       <div> {uniqStocks(props.trades).map(strats => <li key={strats}> {strats} - ${profitPerStock(props.trades, strats)}</li>)}</div>

        </div>
    )}
    
    export default Stats