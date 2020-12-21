

  export function sumProfits(data) {
     if (data.length===0) {
         return []
     } else {
     let profitsArray = []
    data.map(array => profitsArray.push(array.profit))
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return profitsArray.reduce(reducer).toFixed(2)
    }
}

    export function uniqStrategies(data) {
        if (data.length===0) {
            return ["--New Strategy--"]
        } else {
        let strategyArray = []
        data.map(array => strategyArray.push(array.strategy))
             let answer = [...new Set(strategyArray)]
        return answer
        }
    }

    export function profitPerStrat(data, strat) {
        let array = data.filter(str => str.strategy===strat)
        let profit = sumProfits(array)
        console.log("SumProfits: ", profit)
        return profit
    }


    export function uniqStocks(data) {
        if (data.length===0) {
            return []
        } else {
        let stockArray = []
        data.map(array => stockArray.push(array.ticker))
             let answer = [...new Set(stockArray)]
             console.log("ANSWER: ", data)
        return answer
        }
    }

    export function profitPerStock(data, stock) {
        let array = data.filter(str => str.ticker===stock)
        let profit = sumProfits(array)
        return profit
    }

    export function sumROR(data) {  if (data.length===0) {
        return <div>No trades entered yet...</div>
    } else {
        let rorArray = []
    data.map(array => rorArray.push(array.ror)) 
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return rorArray.reduce(reducer).toFixed(2)
    }}

    export function wlPercent(data) {
        let wl = data.filter(array => array.result===true)
        return ((wl.length / data.length) * 100).toFixed(2)
    }