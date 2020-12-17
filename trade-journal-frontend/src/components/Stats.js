import { uniqStrategies } from './Utilities'

const Stats = (props) => {
    return (
        <div>Stats Page
        
        <div>A trade: {props.trades.map(trade => <span>{trade.ror}</span>)} </div>
       <div> {uniqStrategies(props.trades).map(strats => <li key={strats}> {strats}</li>)}</div>

        </div>
    )}
    
    export default Stats