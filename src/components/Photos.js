import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

function Photos({ photos }) {
  const photoList = photos.map((photo, i) => {
    return (
      <li key={i}>
        <Photo photo={photo} />
      </li>
    );
  });

  return (
    <ul>
      {photoList}
    </ul>
  );
}

Photos.propTypes = {
  photos: PropTypes.array.isRequired
};

export default Photos;

