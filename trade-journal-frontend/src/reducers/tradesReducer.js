export default function tradesReducer(state = { trades: []}, action) {
    switch(action.type){
       
        case "GET_TRADES":
            console.log(action)
            // return {
            //     trades: action.payload
            // }
            return {...state, trades: action.payload }

    default:
      return state;
    }
    
}