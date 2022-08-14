import React from 'react';
import PropTypes from 'prop-types';
import './RedButton.scss';

function RedButton({ message }) {
  RedButton.propTypes = {
    message: PropTypes.string.isRequired,
  };
  return (
    <button className="red-button" type="submit">{message}</button>
  );
}

export default RedButton;
