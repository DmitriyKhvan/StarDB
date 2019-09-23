import React, { Component } from "react";
import "./item-details.css";

const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export {Record}

export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.idItem !== prevProps.idItem ||
        this.props.getData !== prevProps.getData ||
        this.props.getImageUrl !== prevProps.getImageUrl) {
      this.updateItem();
    }
  }

  updateItem = () => {
    const { idItem, getData, getImageUrl } = this.props;
    if (!idItem) return;

    getData(idItem).then(item => {
      this.setState({ 
        item,
        image: getImageUrl(item) 
      });
    });
  };

  render() {
    if (!this.state.item) {
      return "Select item!";
    }

    const { item, image } = this.state;

    return (
      <div className="People-details d-flex card">
        <img
          className="People-image"
          src={image}
          alt=""
        />

        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {item});
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
