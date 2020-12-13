export default function fetchTrades() {
   return (dispatch) => {
 //   dispatch();
   fetch('http://localhost:3001/trades')
    .then(response => response.json())
    .then(trades => console.log(trades));
    }
}