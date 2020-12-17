

  export function sumProfits(data) {
     console.log("We are in Utilities:", data)
     if (data.length===0) {
         return <div>Loading...</div>
     } else {
     let profitsArray = []
    data.map(array => profitsArray.push(array.profit))
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return profitsArray.reduce(reducer).toFixed(2)
    }
}

    export function uniqStrategies(data) {
        console.log("We are in Utilities, uniqStrategies:", data)
        if (data.length===0) {
            return <div>Loading...</div>
        } else {
        let strategyArray = []
        data.map(array => strategyArray.push(array.strategy))
             let answer = [...new Set(strategyArray)]
        return answer
        }
    }

    export function profitPerStrat(data, strat) {
        console.log("Data & Strat", data, strat)
        let array = data.filter(str => str.strategy===strat)
        let profit = sumProfits(array)
        console.log("SumProfits: ", profit)
        return profit
    }


    export function uniqStocks(data) {
        if (data.length===0) {
            return <div>Loading...</div>
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
