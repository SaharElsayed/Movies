



import React from 'react';

class Parent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productId: ''
    }
  }



  componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({ productId: id });
  }



  render() {
    const { name, age } = this.state;

    return (
      <div>
        <h1>Name: {name}</h1>
        <h2>Age: {age}</h2>
        <h3>Job title: {this.state.job}</h3>
      </div>
    );
  }

}

export default Parent;