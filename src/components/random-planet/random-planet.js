import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
//import { SwapiServiceConsumer } from "../swapi-service-context";
import Spinner from "../spinner";
import "./random-planet.css";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random()*11 + 2)
    this.swapiService.getPlanet(id).then(planet => {
      this.setState({
        planet,
        loading: false
      });
    });
  };

  render() {
    const { planet, loading } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PlanetView planet={planet}/> : null;

    return (
      <div className="random-planet jumbotron rounded d-flex">
        {spinner}
        {content}
      </div>
      );
  }
}

const PlanetView = ({planet}) => {

  const {id, name, population, rotationPeriod, diameter} = planet;

  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt=""
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};