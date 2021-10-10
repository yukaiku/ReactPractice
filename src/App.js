import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import FindUs from './pages/FindUs';
import { Contact } from './pages/Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';
import Slideshow from './components/Slideshow';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Slideshow/>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/FindUs" component={FindUs} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
          <Footer/>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
