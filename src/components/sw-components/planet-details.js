import React from "react";
import {withSwapiService} from "../hoc";
import ItemDetails, {Record} from "../item-details";

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>

      <Record label="Population" field="population" />
      <Record label="Rotation Period" field="rotationPeriod" />
      <Record label="Diameter" field="diameter" />


     </ItemDetails>
  )
}

const mapMethodToProps = (swapiservice) => {
  return {
    getData: swapiservice.getPlanet,
    getImageUrl: swapiservice.getPlanetImage
  }
}

export default withSwapiService(mapMethodToProps)(PlanetDetails);