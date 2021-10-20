import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import FindUs from './pages/FindUs';
import Menu from './pages/Menu';
import Opportunities from './pages/Opportunities';
import Contact from './pages/Contact';
import { NoMatch } from './NoMatch';
import NavigationBar from './components/NavigationBar';
import { Footer } from './components/Footer';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/FindUs" component={FindUs} />
                <Route path="/Menu" component={Menu} />
                <Route path="/Opportunities" component={Opportunities} />
                <Route path="/Contact" component={Contact} />
                <Route component={NoMatch} />
            </Switch>
          <Footer/>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
