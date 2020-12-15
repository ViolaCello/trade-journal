


const Show = (props) => {

    // let t = parseInt(props.match.params.id)
    let trade = props.trades.filter(data => data.id == props.match.params.id)[0]

    {console.log("Show Page", props)}

    debugger
    return (
    <div>
    
   <h2> Show Page - Trade #{trade.id} </h2>
   
    </div> 
    )
}

export default Show