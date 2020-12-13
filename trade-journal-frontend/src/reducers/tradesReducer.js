export default function tradesReducer(state = { trades: []}, action) {
    switch(action.type){

        case "GET_TRADES":
            return {
                ...state,
                trades: [...state.trades]
            }

    default:
      return state;
    }
}