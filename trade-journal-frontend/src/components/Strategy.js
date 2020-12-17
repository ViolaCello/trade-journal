import { uniqStrategies,  profitPerStrat } from './Utilities'


const Strategy = props => {
    return (
        <div>
<h2>Profits Per Strategy</h2>
        <h5>Strategy - Profit</h5>
       <div> {uniqStrategies(props.trades).map(strats => <li key={strats}> {strats} - ${profitPerStrat(props.trades, strats)}</li>)}</div>
       </div>
)
}

export default Strategy