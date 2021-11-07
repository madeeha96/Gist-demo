import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

Avatar.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

/**
 * @param {string} avatarUrl - avatar profile picture link of user
 * @param {string} name - name of the user
 * @description - show the user avatar component with name.
 */

export default function Avatar({ avatarUrl, name }) {
  return [
    <img key="image" src={avatarUrl} alt={name} className="avatar" />,
    <span key="username" className="text-secondary">
      {name}
    </span>,
  ];
}
