import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {

  return (
    <div>
      <Link to='/trades' >Trades  </Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/trades/new'> Enter New Trade</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/trades/stats'> Trade Statistics</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <hr></hr>
    </div>

  )
}

export default Navbar