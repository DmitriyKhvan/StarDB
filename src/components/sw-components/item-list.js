import ItemList from "../item-list";
import {
  withData, 
  withChildFunction,
  withSwapiService
} from "../hoc"

const renderNameAndBirthday = ({name, birthYear}) => (`${name}, (${birthYear})`);
const renderNameAndModel = ({name, model}) => (`${name}, (${model})`);
const renderNameAndPopulation = ({name, population}) => (`${name}, (${population})`);

const mapPeopleMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}

const PeopleList = withSwapiService(mapPeopleMethodToProps)(
                                            withData(
                                              withChildFunction(renderNameAndBirthday)(
                                                ItemList)));
                  

const StarshipsList = withSwapiService(mapStarshipMethodToProps)(
                                          withData(
                                            withChildFunction(renderNameAndModel)(
                                              ItemList)));

const PlanetsList = withSwapiService(mapPlanetMethodToProps)(
                                        withData(
                                          withChildFunction(renderNameAndPopulation)(
                                            ItemList)));

export {
  PeopleList,
  StarshipsList,
  PlanetsList
};

