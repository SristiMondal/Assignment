import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";

const App=()=> {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const username=localStorage.getItem("username");
    const password=localStorage.getItem("password");
    
    if(username=="task@gmail.com" && password == "12345678"){
      setAuthenticated(true)                                       
    }
    
  });
  return (
    <>
      <Switch>
        <Route exact path="/login" component={Login} />
        {authenticated? <Route exact path="/" component={Dashboard}/>:<Route exact path="/login" component={Login} />}
      </Switch>
    </>
  );
}

export default App;
