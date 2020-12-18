import React from 'react'

// const rest = restClient("HnmtxvRkKGbvQnr_dMdr14nhLxpfDGxT");
import { connect } from 'react-redux'
import  fetchMarketData  from '../actions/fetchMaretData'
// import { polygonClient, restClient, websocketClient } from "polygon.io";



class Market extends React.Component {



componentDidMount() {
	const getMarket =  async() => {
		await this.props.fetchMarketData()
	   }
	   getMarket()

}


// getNewsFeed() {
// let url = 'http://newsapi.org/v2/top-headlines?' +
//           'sources=bbc-news&' +
//           'apiKey=3096f53a3884467096389e276a7ff733';
//  let req = new Request(url);

//  fetch(req)
//     .then(function(response) {
// 		//console.log("NEWS FEED: ", response.json());
// 		return response
//     })
// }

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