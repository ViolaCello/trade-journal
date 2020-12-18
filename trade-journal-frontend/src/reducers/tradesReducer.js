export default function tradesReducer(state = { 
    trades: [],
    market: []
           },  action) {

    switch(action.type) {

      case 'GET_MARKET': 

      return {
        ...state, market: action.payload
      }

      
        case "GET_TRADES":
      
            return {...state, trades: action.payload,
                     }

             case 'ADD_TRADE_SUCCESS':
              return {...state, trades: [...state.trades, action.payload]
              }

              case 'DELETE_TRADE':
                console.log("DELETE_TRADE: ", action.payload)
                return {...state, 
                  trades: state.trades.filter(trade => trade.id !== action.payload)
                }

                case 'EDIT_TRADE':
                  return {
                    ...state, trades: [...state.trades.filter(trade => trade.id !==action.payload.id), action.payload]
                  }
             
    default:
      return state;
    }
    
}