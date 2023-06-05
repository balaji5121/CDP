import { useReducer } from "react";
import "./App.css";
import Login from "./Pages/Login";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout/Layout";
import { ProtectedRoute } from "./Authenctication/ProtectedRoute";
import { AppContext } from "./Store/Context";

const App = () => {
  return (
    <AppContext.Provider value={{}}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Layout>
          <ProtectedRoute exact path="/" component={Home} />
        </Layout>
      </Switch>
    </AppContext.Provider>
  );
};

export default App;
