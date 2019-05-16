import React from 'react';
import Color from './Color.js';
import { hexFromRGB } from '../services/rgb.js';

import PropTypes from 'prop-types';

export default function Colors({ colors }) {
  const colorList = colors.map(({ name, rgb }) => {
    const hex = hexFromRGB(rgb);
    return (
      <li key={`${name}-${hex}-${rgb}`} style={{ textDecoration: 'none' }}>
        <Color name={name} hex={hex} rgb={rgb} /> 
      </li>
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
};
