import React from "react";
import GistCard from "../gistCard";
import store from "../../store";

import "./styles.css";

/**
 * @description - Search results renders gists of specific user or handles error/ No result found in case of any username.
 */
function SearchResults() {
  const { gists, gistsErr, username, gistsLoading } = store();

  debugger;

  if (gistsLoading) {
    return (
      <div className="results-box loader">
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <div className="results-box">
      {gists.length && !gistsErr ? (
        <div>
          <ul>
            {gists.map((gist, index) => {
              return <GistCard key={gist.id} gistData={gist} />;
            })}
          </ul>
          <div className="status-box">
            <p className="lead">
              <strong>{gists.length}</strong> results found for{" "}
              <strong>{username}</strong>
            </p>
          </div>
        </div>
      ) : (
        <div className="error-box">
          <p className="text-danger">{gistsErr}</p>
        </div>
      )}
    </div>
  );
}

export default SearchResults;
