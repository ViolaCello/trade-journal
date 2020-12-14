export const addTrade = (data) => {
    console.log("AddTrade", data)
    if (!!data.newStrategy) {
        data.strategy = data.newStrategy
    }
    console.log("AFTER AddTrade", data)
    return (dispatch) => {
      fetch(`http://localhost:3001/trades`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((trade) =>
          dispatch({ type: "ADD_TRADE_SUCCESS", payload: trade })
        );
    };
  };
  