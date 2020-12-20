import React, { Component } from 'react'

class MarketData extends Component {

    state = {
        dia: '',
        spy: '',
        qqq: '',
        iwm: '',
        gld: '',
        slv: ''
    }

    render() {
        return (
          <div>
          <h3>Delayed Market Data</h3>
            <p>DOW: {this.state.dia}</p> 
           <p>S&P 500: {this.state.spy}</p> 
          <p>NASDAQ: {this.state.qqq}</p> 
           <p>Russell 2000: {this.state.iwm}</p> 
           <p className="gold">Gold: {this.state.gld}</p> 
           <p className="silver">Silver: {this.state.slv}</p> 
          </div>
        
        )
      }
     
      componentDidMount() {
          let [month, date, year] = new Date().toLocaleDateString("en-US").split("/")
          let insert = parseInt(year) + "-" + parseInt(month) + "-" + parseInt(date)
        fetch('https://api.polygon.io/v2/aggs/ticker/SPY/range/1/day/2020-12-18/'+insert+'?apiKey=HnmtxvRkKGbvQnr_dMdr14nhLxpfDGxT')
            .then(rep => rep.json())
          .then(data => {
            this.setState({
              spy: data.results[data.results.length - 1].c
            })
        })
        .catch(message => {
            this.setState({
                spy: 'unavailable'
            })
        })
          fetch('https://api.polygon.io/v2/aggs/ticker/QQQ/range/1/day/2020-12-18/'+insert+'?apiKey=HnmtxvRkKGbvQnr_dMdr14nhLxpfDGxT')
            .then(rep => rep.json())
          .then(data => {
            this.setState({
              qqq: data.results[data.results.length - 1].c
            })
          })
          .catch(message => {
            this.setState({
                qqq: 'unavailable'
            })
        })
          fetch('https://api.polygon.io/v2/aggs/ticker/IWM/range/1/day/2020-12-18/'+insert+'?apiKey=HnmtxvRkKGbvQnr_dMdr14nhLxpfDGxT')
            .then(rep => rep.json())
          .then(data => {
            this.setState({
              iwm: data.results[data.results.length - 1].c
            })
          })
          .catch(message => {
            this.setState({
                iwm: 'unavailable'
            })
        })
          fetch('https://api.polygon.io/v2/aggs/ticker/GLD/range/1/day/2020-12-18/'+insert+'?apiKey=HnmtxvRkKGbvQnr_dMdr14nhLxpfDGxT')
            .then(rep => rep.json())
          .then(data => {
            this.setState({
              gld: data.results[data.results.length - 1].c
            })
          })
          .catch(message => {
            this.setState({
                gld: 'unavailable'
            })
        })
          fetch('https://api.polygon.io/v2/aggs/ticker/SLV/range/1/day/2020-12-18/'+insert+'?apiKey=HnmtxvRkKGbvQnr_dMdr14nhLxpfDGxT')
            .then(rep => rep.json())
          .then(data => {
            this.setState({
              slv: data.results[data.results.length - 1].c
            })
          })
          .catch(message => {
            this.setState({
                slv: 'unavailable'
            })
        })
          fetch('https://api.polygon.io/v2/aggs/ticker/DIA/range/1/day/2020-12-18/'+insert+'?apiKey=HnmtxvRkKGbvQnr_dMdr14nhLxpfDGxT')
          .then(rep => rep.json())
        .then(data => {
          this.setState({
            dia: data.results[data.results.length - 1].c
          })
        })
        .catch(message => {
            this.setState({
                dia: 'unavailable'
            })
        })
      }


}


export default MarketData
