
export const addTrade = (data, history) => {
  if (!!data.newStrategy) {
    data.strategy = data.newStrategy
}
  return (dispatch) => {
    fetch(`http://localhost:3001/trades`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(trade => {
        if (trade.errors) {
          alert(trade.errors)
        } else {
          dispatch({type: 'ADD_TRADE_SUCCESS', payload: trade})
          history.push(`/trades/${trade.id}`)
        }
      }
    )
  }
}
