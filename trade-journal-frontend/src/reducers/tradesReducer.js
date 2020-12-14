export default function tradesReducer(state = { 
    trades: [],
    totalProfit: '',
    totalTrades: '',
    firstTrade: ''
                    },  action) {

    switch(action.type){
       
        case "GET_TRADES":
          //  console.log("Doing Math", action.payload[0].profit)
            let profitsArray = []
            action.payload.map(array => profitsArray.push(array.profit))
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            // console.log("reducer: ", profitsArray.reduce(reducer))
            return {...state, trades: action.payload, totalTrades: action.payload.length, totalProfit: profitsArray.reduce(reducer) }

    default:
      return state;
    }
    
}