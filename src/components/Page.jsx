import React from 'react'
import { Link } from 'react-router-dom';
function page({username}) {
  return (
    <div>
        
        <div style={{ marginTop:'20%'}}>
            <h2>Thank you for login <i style={{ fontFamily:'sans-serif'}}> {username} </i> <Link to='/' style={{ color:'white',textDecoration:'none' }}> click here </Link> to logout </h2>
        </div>
    </div>
  )
}

export default page