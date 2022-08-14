import React from 'react';
import PropTypes from 'prop-types';
import './RedButton.scss';

function RedButton({ message, method }) {
  RedButton.propTypes = {
    message: PropTypes.string.isRequired,
    method: PropTypes.func.isRequired,
  };
  return (
    <button className="red-button" type="submit" onClick={() => { method(); }}>{message}</button>
  );
}

export default RedButton;
