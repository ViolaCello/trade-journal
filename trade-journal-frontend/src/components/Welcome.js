 const Welcome = () => {
     return (
        <div className="welcome">
             <p>Welcome to your Trade Journal.</p>
             <p>The first step towards your profitable success as a trader is to keep an accurate record of what is working for you as a trader, and more importantly, what ISN'T working for you as a trader.</p>
            <br /><br />
            <p><b>To Use:</b></p>
          
                <p>Click <b>Enter New Trade</b></p>
                <p>Enter the details of the trade, including:<br />
                Security Ticker Symbol<br />
                Date of Trade <br />
                Strategy user for this trade *** <br />This is most important, as the way to learn to trade is to document what you're doing to make a profit.<br /><br />
                You can choose a strategy that you have previously used from the dropdown menu, or you click "New Strategy" and enter a new strategy.  </p>
               <p>Also enter the amount of profit or loss (enter losses with a negative number) from the trade outcome.</p> 
           
            <p>After some trade data is enter, click <b>Stats</b> to see your overall statistics, as well as profit broken down by Stock and Strategy</p>
            <p>Visit the <b>Trades</b> page to view a list of your trades.  You can click on a particular trade to get further information on the trade, as well as to Edit it or Delete it from the database.</p>

         </div>
     )
 }

 export default Welcome