// import tallyProfits from "../components/utils";

export default function tradesReducer(state = { 
    trades: [],
    totalProfit: '',
    totalTrades: '',
    firstTrade: ''
                    },  action) {

    switch(action.type){
       
        case "GET_TRADES":
          //  console.log("Doing Math", action.payload[0].profit)
         // debugger
            // let profitsArray = []
            // action.payload.map(array => profitsArray.push(array.profit))
            // const reducer = (accumulator, currentValue) => accumulator + currentValue;
            // console.log("reducer: ", profitsArray.reduce(reducer))
            // let strategyArray = []
            // action.payload.map(array => strategyArray.push(array.strategy))
            // let uniqStrategies = [...new Set(strategyArray)]
            return {...state, trades: action.payload,
              //  totalTrades: action.payload.length,
              //   totalProfit: profitsArray.reduce(reducer).toFixed(2),
              //   uniqStrategies: [...new Set(strategyArray)]
             }

             case 'ADD_TRADE_SUCCESS':
              return {...state, trades: [...state.trades, action.payload]
              }
              case 'DELETE_TRADE':
                console.log("DELETE_TRADE: ", action.payload)
                return {
                  trades: state.trades.filter(trade => trade.id !== action.payload)
                }
    default:
      return state;
    }
    
}