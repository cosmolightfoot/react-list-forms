import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';

function PhotoAlbum({ photos, title }) {
  return (
    <>
    <h1>{title}</h1>
    <Photos photos={photos} />
    </>
  );
}

PhotoAlbum.propTypes = {
  photos: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default PhotoAlbum;
