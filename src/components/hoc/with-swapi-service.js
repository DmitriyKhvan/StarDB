import React from "react";
import {SwapiServiceConsumer} from "../swapi-service-context";

const withSwapiService = (mapMethodToProps) => (Wrapped) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (swapiservice) => {
            const serviceProps = mapMethodToProps(swapiservice);
            return <Wrapped {...props} {...serviceProps} /> 
          }
        }
      </SwapiServiceConsumer>
    );
  };
};

export default withSwapiService;