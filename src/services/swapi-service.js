export default class SwapiService {

  _apiBase = "https://swapi.co/api";
  _imageBase = "https://starwars-visualguide.com/assets/img";
  getResource = async(url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }

    return res.json();
  } 

  getPlanet = async(id) => {
    const res = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(res);
  }

  getPerson = async(id) => {
    const res = await this.getResource(`/people/${id}`);
    return this._transformPeople(res);
  }

  getStarship = async(id) => {
    const res = await this.getResource(`/starships/${id}`);
    return this._transformStarship(res);
  }

  getAllPeople = async() => {
    const res = await this.getResource(`/people/`);
    return await res.results
                        .map(this._transformPeople)
                        .slice(0, 5); 
  }

  getAllStarships = async() => {
    const res = await this.getResource(`/starships/`);
    return await res.results
                      .map(this._transformStarship)
                      .slice(0, 5);
  }

  getAllPlanets = async() => {
    const res = await this.getResource(`/planets/`);
    return await res.results
                      .map(this._transformPlanet)
                      .slice(0, 5);
  }

  getPersonImage = ({id}) => {
    return `${this._imageBase}/characters/${id}.jpg`;
  }

  getPlanetImage = ({id}) => {
    return `${this._imageBase}/planets/${id}.jpg`
  }

  getStarshipImage = ({id}) => {
    return `${this._imageBase}/starships/${id}.jpg`;
  }

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPeople = (people) => {
    return {
      id: this._extractId(people),
      name: people.name,
      gender: people.gender,
      birthYear: people.birth_year,
      eyeColor: people.eye_color
    }
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      starshipClass: starship.starship_class
    }
  }

}