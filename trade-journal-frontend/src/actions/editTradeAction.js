export const editTradeAction = (data, history) => {
    if (!!data.newStrategy) {
        data.strategy = data.newStrategy
    }
       return (dispatch) => {
         return fetch(`http://localhost:3001/trades/${data.id}`, {
            method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(trade => {
      // debugger
        if (trade.errors) {
          alert(trade.errors)
        } else {
          dispatch({type: 'EDIT_TRADE', payload: trade})
          history.push(`/trades/${trade.id}`)
        }
      }
    )
  }
}
