import React, { PureComponent } from 'react';
// import figlet from 'figlet';

export default class textFormatter extends PureComponent {
  state = {
    text: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  } 

  render() {

    return (
      <input name="text" value={text} onChange={this.handleChange} />
    );
  }
}
