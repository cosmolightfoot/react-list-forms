import React, { PureComponent } from 'react';
import figlet from 'figlet';

export default class TextFormatter extends PureComponent {
  state = {
    text: '',
    color: 'black',
    font: '',
    formattedText: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();
    });
  }

  formatText = () => {
    const { text, font } = this.state;
    figlet.text(text, { font: font }, (err, result) => {
      this.setState({ formattedText: result });
    });
  }

  render() {
    const { text, color, font, formattedText } = this.state;

    const fontOptions = ['Alligator', 'Alpha', 'Barbwire', 'Banner4', 'Isometric3'].map(font => {
      return (<option key={font} value={font}>{font}</option>);
    });

    return (
      <>
      <select name="font" value={font} onChange={this.handleChange}>{fontOptions}</select>
      <input name="text" value={text} onChange={this.handleChange} />
      <input name="color" type="color" value={color} onChange={this.handleChange} />
      <pre style={{ color }}>{formattedText}</pre>
      </>
    );
  }
}
