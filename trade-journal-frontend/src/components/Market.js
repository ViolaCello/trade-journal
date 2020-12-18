import React from 'react'

// const rest = restClient("HnmtxvRkKGbvQnr_dMdr14nhLxpfDGxT");
import { connect } from 'react-redux'
import  fetchMarketData  from '../actions/fetchMaretData'
import { polygonClient, restClient, websocketClient } from "polygon.io";



class Market extends React.Component {



componentDidMount() {
	const getMarket =  async() => {
		await this.props.fetchMarketData()
	   }
	   getMarket()

}

render() {
	
    return (
        <div>S&P 500: $ {this.props.market.results ? <span>{this.props.market.results[this.props.market.results.length - 1].c}</span> : null}
		
		
		</div>
    )
}


}

const mapStateToProps = state => {
	return {
			market: state.market,
		  }
  }
  
  export default connect(mapStateToProps, { fetchMarketData }) (Market);