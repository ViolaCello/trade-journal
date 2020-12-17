export default function getMarketData() {
    return (dispatch) => {
        fetch('https://api.polygon.io/v2/aggs/ticker/SPY/range/1/day/2020-06-01/2020-06-17?apiKey=HnmtxvRkKGbvQnr_dMdr14nhLxpfDGxT')
  .then(rep => rep.json())
  .then(market => dispatch({
    type: 'GET_MARKET',
    payload: market
  })
  )
    }
}