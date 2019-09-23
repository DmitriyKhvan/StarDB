import React, { Component } from "react";
import Row from "../row";
import {
  PeopleList, 
  PersonDetails
} from "../sw-components"

export default class PeoplePage extends Component {

  state = {
    idItem: null
  }

  onSelectIdItem = (id) => {
    this.setState({
      idItem: id
    });
  }

  render() {

    const { idItem } = this.state;
    return(
      <Row 
            left={<PeopleList onSelectIdItem={this.onSelectIdItem}/>} 
            right={<PersonDetails idItem={idItem} />} />
    )
  }
}