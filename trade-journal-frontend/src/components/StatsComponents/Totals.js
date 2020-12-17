import { sumROR, sumProfits, wlPercent } from '../../components/Utilities'


const Totals = props => {
    return (
        <div>
        Total Profit: ${sumProfits(props.trades)} <br />
        Total Return on Risk: ${sumROR(props.trades)} <br />
        Win/Loss % {wlPercent(props.trades)} <br />

        </div>
    )
   
}

export default Totals