import React from "react";
import Row from "../row";
import {withRouter} from "react-router-dom";
import {
  PlanetsList, 
  PlanetDetails
} from "../sw-components"

const PlanetsPage = ({history, match}) => {

  const { id } = match.params; 
  return(
    <Row 
          left={<PlanetsList onSelectIdItem={(id) => history.push(id)}/>} 
          right={<PlanetDetails idItem={id} />} />
  )

}

export default withRouter(PlanetsPage);