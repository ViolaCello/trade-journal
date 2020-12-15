

  export function sumProfits(data) {
     console.log("We are in Utilities:", data.trades)
     if (data.length===0) {
         return <div>Loading...</div>
     } else {
     let profitsArray = []
    data.map(array => profitsArray.push(array.profit))
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return profitsArray.reduce(reducer).toFixed(2)
    }
}




