import React from 'react';
import PropTypes from 'prop-types';

const decimalFromHex = hex => {
  return Number.parseInt(`0x${hex}`, 16);
};

const rgbFromHex = hex => {
  return {
    red: decimalFromHex(hex.slice(1, 3)),
    green: decimalFromHex(hex.slice(3, 5)),
    blue: decimalFromHex(hex.slice(5, 7)),
  };
};

export default function Color({ name, hex }) {
  const rgb = rgbFromHex(hex);

  const colorStyle = {
    display: 'inline-block',
    backgroundColor: hex,
    width: '0.8em',
    height: '0.8em'
  };

  return (
    <dl>
      <dt>Color:</dt>
      <dd>{name}<div style={colorStyle}></div></dd>

      <dt>Hex:</dt>
      <dd>{hex}</dd>

      <dt>Red:</dt>
      <dd>{rgb.red}</dd>

      <dt>Green:</dt>
      <dd>{rgb.green}</dd>

      <dt>Blue:</dt>
      <dd>{rgb.blue}</dd>
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired
};
