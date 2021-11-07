import React from "react";
import PropTypes from "prop-types";
import Avatar from "../avatar";

Forks.propTypes = {
  forks: PropTypes.array.isRequired,
};

/**
 * @param {array} forks - forks listing done by other users for the specific gist
 * @description - show forks listing with avatars
 */

export default function Forks({ forks }) {
  return (
    <ul className="indent-left">
      {forks.map((fork, index) => {
        return (
          <li key={index}>
            <a
             without={fork.id.toString()}
              rel="noreferrer"
              href={`https://gist.github.com/${fork.id}`}
              target="_blank"
            >
              <Avatar avatarUrl={fork.user.avatar_url} name={fork.user.login} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
