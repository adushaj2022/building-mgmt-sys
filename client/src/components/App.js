import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { CurrentUser } from "../api/CurrentUser";
import { useStateValue } from "../context/StateProvider";
import Building from "../pages/Building";
import Employees from "../pages/Employees";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Residents from "../pages/Residents";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

const App = () => {
  const [nav, setNav] = useState(true);
  const [{ user }, dispatch] = useStateValue();
  useEffect(async () => {
    setNav(true);
    const user = await CurrentUser();
    dispatch({
      type: "SET_USER",
      payload: { ...user },
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Route
          exact
          path="/login"
          render={(props) => <Login {...props} setNav={setNav} />}
        />
        {nav && <NavBar />}
        <Route exact path="/" component={Home} />
        <Route exact path="/employees" component={Employees} />
        <Route exact path="/residents" component={Residents} />
        <Route exact path="/building" component={Building} />
      </BrowserRouter>
    </>
  );
};

export default App;
