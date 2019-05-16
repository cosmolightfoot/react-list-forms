import React, { PureComponent } from 'react';
import Colors from '../components/Colors.js';
import CreateColor from '../components/CreateColor.js';

export default class ColorsList extends PureComponent {
  state = {
    colors: []
  }

  addColor = color => {
    this.setState(state => {
      return {
        colors: [...state.colors, color]
      };
    });
  };

  render() {
    const { colors } = this.state;
    return (
      <section>
        <CreateColor addColor={this.addColor} />
        <Colors colors={colors} />
      </section>
    );
  }
}

