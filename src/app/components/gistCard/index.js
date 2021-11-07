import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles.css";
import Badge from "../badge";

GistCard.propTypes = {
  gistData: PropTypes.object.isRequired,
};

/**
 * @param {object} gistData - single gist data
 * @description - show gist single gist card with description, no. of files details and badges
 */
export default function GistCard({ gistData }) {
  const noOfFiles = Object.keys(gistData.files).length;
  return (
    <Link
      to={{
        pathname: `/${gistData.id}`,
      }}
      state={{
        description: gistData.description,
        files: gistData.files,
        id: gistData.id,
      }}
    >
      <li className="list-row shadow-lg p-3 mb-5 bg-white rounded">
        <p className="lead">{gistData.description || "No Description"}</p>
        <p className="text-secondary">
          {noOfFiles} {noOfFiles > 1 ? "Files" : "File"}
        </p>
        <Badge files={gistData.files} />
      </li>
    </Link>
  );
}
