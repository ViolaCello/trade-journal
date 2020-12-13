export default function fetchTrades() {
   return (dispatch) => {
   fetch('http://localhost:3001/trades')
    .then(response => response.json())
    .then(trades => dispatch({
        type: 'GET_TRADES',
        payload: trades
      }))
    }
  }