import { profitPerStock, sumProfits } from '../../components/Utilities'


const Totals = props => {
    return (
        <div>
        Total Profit: ${sumProfits(props.trades)}

        </div>
    )
   
}

export default Totals