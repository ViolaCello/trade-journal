export const editTradeAction = (data, history) => {
    if (!!data.newStrategy) {
        data.strategy = data.newStrategy
    }
  // debugger
       return (dispatch) => {
         return fetch(`http://localhost:3001/trades/${data.id}`, {
            method: 'PATCH',
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
          history.push(`/trades/${data.id}`)
        }
      }
    )
  }
}
