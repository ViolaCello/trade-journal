import { uniqStocks, profitPerStock } from './Utilities'


const Stocks = props => {
    return (
        <div>
<h2>Profits Per Stock</h2>
        <h5>Stock - Profit</h5>
       <div> {uniqStocks(props.trades).map(strats => <li key={strats}> {strats} - 
       ${(profitPerStock(props.trades, strats)) >=0 ? <span className="profit">{profitPerStock(props.trades, strats)} </span> : 
       <span className="loss">{profitPerStock(props.trades, strats)} </span>
       }
      
       </li>)}</div>
       </div>
)
}

export default Stocks