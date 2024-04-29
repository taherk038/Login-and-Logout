import {useState} from 'react'
import { Link } from 'react-router-dom'

function Regist({name,username,password,cpassword,c,c1,c2,c3}) {
    
    
 
  function check(){
    return (name.length>0 && username.length>0 && password.length>0 && cpassword.length>0);
  }

  let alertit=()=>{
    if(check()){
        alert("You have Registered successfully  "+ name)
    }
  }

  return (
    <div>
        
        <div className="re">
        <div>
          <h1 style={{ paddingTop: "50px" }}>Register </h1>
        </div>
        <div className="user">
          <input
            type="text"
            placeholder="Name"
            onChange={c}
            value={name}
          />
        </div>
        <div className="user">
          <input
            type="text"
            placeholder="username"
            onChange={c1}
            value={username}
          />
        </div>
        <div className="pass">
          <input
            type="password"
            placeholder="password"
            onChange={c2}
            value={password}
          />
        </div>
        <div className="pass">
          <input
            type="password"
            placeholder="Confirm password"
            onChange={c3}
            value={cpassword}
          />
        </div>
        <div>
          <Link to={check() ? "/page" : "#"}>
            <button onClick={alertit} disabled={!check()}>Register</button>
          </Link>
        </div>
        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            textDecoration: "none",
          }}
        >
          have an account ?
          <Link to="/" style={{ textDecoration: "none" ,color:"skyblue",}}>
            Click here
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Regist