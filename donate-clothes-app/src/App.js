import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Home from "./components/Home/home";
import ThreeColumns from "./components/Home/ThreeColumns/threeColumns";
import WhoDoWeHelp from "./components/Home/WhoDoWeHelp/whoDoWeHelp";
import EasySteps from "./components/Home/EasySteps/easySteps";
import AboutUs from "./components/Home/AboutUs/aboutUs";
import ContactForm from "./components/Home/ContactForm/contactForm";

function App() {
  return (
      <>
          <Router>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/threecolumns" component={ThreeColumns} />
                  <Route exact path="/whodowehelp" component={WhoDoWeHelp} />
                  <Route exact path="/easysteps" component={EasySteps} />
                  <Route exact path="/aboutus" component={AboutUs} />
                  <Route exact path="/contact" component={ContactForm} />
              </Switch>
          </Router>
      </>
  );
}

export default App;
