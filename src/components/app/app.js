import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import Header from "../header";
import RandomPlanet from "../random-planet";
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage
} from "../pages";
import ErrorBoundry from "../error-boundry";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import "./app.css";
import { StarshipDetails } from "../sw-components";

export default class App extends Component {

  state = {
    swapiService : new SwapiService()
  }

  onChangeService = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? 
                          DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      }
    });
  }

  render() {

    return (      
      <React.Fragment>
        <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <Header onChangeService={this.onChangeService}/>
            <RandomPlanet />
            <Switch>
              <Route path="/"
                      render={() => <h2>Welcome to StarDB</h2>}
                      exact/>
              <Route path="/people" component={PeoplePage}/> 
              <Route path="/planets/:id?" component={PlanetsPage}/>
              <Route path="/starships" exact component={StarshipsPage}/> 
              <Route path="/starships/:id" 
                      render = {({match}) => {
                      const { id } = match.params;
                      return <StarshipDetails idItem={id}/>
                      }} /> 

              <Route render={() => <h2>Page not found!</h2>} />

            </Switch>
          </Router>
        </SwapiServiceProvider>
        </ErrorBoundry>
      </React.Fragment>
    );
  }
}
