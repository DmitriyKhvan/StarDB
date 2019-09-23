import React from "react";
import {withSwapiService} from "../hoc";
import ItemDetails, {Record} from "../item-details";


const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>

      <Record label="Model" field="model" />
      <Record label="Starship Class" field="starshipClass" />
      
     </ItemDetails>
  )
}

const mapMethodToProps = (swapiservice) => {
  return {
    getData: swapiservice.getStarship,
    getImageUrl: swapiservice.getStarshipImage
  }
}

export default withSwapiService(mapMethodToProps)(StarshipDetails);