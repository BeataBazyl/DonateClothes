import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Home from "./components/Home/home";
import Log from "./components/Log/log";
import SignIn from "./components/SignIn/signIn";
import UpperMenu from "./components/UpperMenu/upperMenu";

function App() {
  return (
      <>
          <Router>
              <UpperMenu/>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/logowanie/" component={Log} />
                  <Route path="/rejestracja/" component={SignIn} />
              </Switch>
          </Router>
      </>
  );
}

export default App;
