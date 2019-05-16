import React from 'react';
import PropTypes from 'prop-types';
import styles from './Color.css';


export default function Color({ name, hex, rgb }) {
  return (
    <dl>
      <dt>Name:</dt>
      <dd>{name || hex}<div className={styles.display} style={{ backgroundColor: hex }}></div></dd>
        
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
  name: PropTypes.string,
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.shape({
    red: PropTypes.number.isRequired,
    green: PropTypes.number.isRequired,
    blue: PropTypes.number.isRequired
  })
};

