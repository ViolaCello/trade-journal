export default function tradesReducer(state = { trades: []}, action) {
    switch(action.type){
       
        case "GET_TRADES":
            console.log(state)
            return {
                trades: action.payload
               
            }

    default:
      return state;
    }
    
}