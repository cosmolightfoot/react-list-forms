import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

export default function Colors({ colors }) {
  const colorList = colors.map(({ name, hex }) => {
    return (
      <Color key={`${name}+${hex}`} name={name} hex={hex} />
    );
  });

  return (
    <ul>
      {colorList}
    </ul>
  );
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired
}
