import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CreateColor extends PureComponent {
  static propTypes = {
    addColor: PropTypes.func.isRequired
  }
  
  state = {
    name: '',
    color: '#000000'
  }

  handleSubmit = ({ preventDefault }) => {
    preventDefault();
    const { name, color } = this.state;
    
    console.log({ name, hex: color })
    this.props.addColor({ name, hex: color });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { name, color } = this.state;
    
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" value={name} onChange={this.handleChange} />
        <input type="color" name="color" value={color} onChange={this.handleChange} />
        <button>Add Color</button>
      </form>
    );
  }  
}
