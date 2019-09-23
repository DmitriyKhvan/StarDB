import React from "react";
import ItemDetails, {Record} from "../item-details";
import {withSwapiService} from "../hoc";

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record label="Gender" field="gender" />
      <Record label="Birth Year" field="birthYear" />
      <Record label="Eye Color" field="eyeColor" />
    </ItemDetails>
  )
}

const mapMethodToProps = (swapiservice) => {
  return {
    getData: swapiservice.getPerson,
    getImageUrl: swapiservice.getPersonImage
  }
}

export default withSwapiService(mapMethodToProps)(PersonDetails);