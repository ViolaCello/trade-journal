import React from 'react'
import { polygonClient, restClient, websocketClient } from "polygon.io";
const rest = restClient("HnmtxvRkKGbvQnr_dMdr14nhLxpfDGxT");

let r = ""

class Market extends React.Component {



componentDidMount() {
	
 fetch('https://api.polygon.io/v2/aggs/ticker/SPY/range/1/day/2020-06-01/2020-06-17?apiKey=HnmtxvRkKGbvQnr_dMdr14nhLxpfDGxT')
  .then(rep => rep.json())
  .then(data => r = data)
}

render() {
    return (
        <div>Data: {(r.length > 0) ? <span>{r.results[0].c}</span>  : null }
		</div>
    )
}


}

export default Market