export default function tradesReducer(state = { 
    trades: [],
    totalProfit: '',
    totalTrades: '',
    firstTrade: ''
                    },  action) {

    switch(action.type){
       
        case "GET_TRADES":
            console.log("Doing Math", action.payload.length)
            
            return {...state, trades: action.payload, totalTrades: action.payload.length }

    default:
      return state;
    }
    
}