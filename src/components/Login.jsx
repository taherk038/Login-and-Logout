import React from "react";
import { Link } from "react-router-dom";

function Login({ username, password, c1, c2 }) {
  const check = () => {
    return username.trim().length > 0 && password.trim().length > 0;
  };

  return (
    <div>
      <div className="d">
        <div>
          <h1 style={{ paddingTop: "50px" }}>Login </h1>
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
        <div
          style={{
            marginTop: "4px",
            textAlign: "right",
            
          }}
        >
          
          <Link to="#" style={{ textDecoration: "none" ,color:"skyblue",}}>
          Forgot Password ?
          </Link>
        </div>
        <div>
          <Link to={check() ? "/page" : "#"}>
            <button disabled={!check()}>Login</button>
          </Link>
        </div>
        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            textDecoration: "none",
          }}
        >
          don't have an account ?
          <Link to="/Regist" style={{ textDecoration: "none" ,color:"skyblue",}}>
            Click here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
