export const deleteTrade = (tradeId, history) => {
 // debugger
    return (dispatch) => {
      return fetch(`http://localhost:3001/trades/${tradeId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json" }
      })
      .then(resp => resp.json())
      .then(trade => {
        dispatch({type: 'DELETE_TRADE', payload: tradeId})
      history.push("/trades")
    })
    }
  }

  //  

  // .then(trade => console.log("In Delete_Trade: ", trade))