import React from 'react'

class Market extends React.Component {

componentDidMount() {
    fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "08507dcb2dmsh734c7c4378428e1p116926jsn2b0915eb021b",
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
}

render() {
    return (
        <div></div>
    )
}


}

export default Market