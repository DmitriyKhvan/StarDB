import React, { Component } from "react";
import Spinner from "../spinner";

const withData = (View) => {
  return class extends Component {
    state = {
      items: null
    };

    componentDidMount() {
      this.update();
    }

    componentDidUpdate(prevProps) {
      if(this.props.getData !== prevProps.getData){
        this.update();
      }
    }

    update = () => {
      this.props.getData().then(items => {
        this.setState({ items });
      });
    }

    render() {
      const { items } = this.state;

      if (!items) {
        return <Spinner />;
      }

      return <View {...this.props} items={items}/>;
    }
  };
};

export default withData;