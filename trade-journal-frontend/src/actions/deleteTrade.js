export const deleteTrade = (tradeId) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/trades/${tradeId}`, {
        method: 'DELETE'
      })
      .then(resp => resp.json())
      .then(trade => dispatch({type: 'DELETE_TRADE', payload: trade}))
    }
  }