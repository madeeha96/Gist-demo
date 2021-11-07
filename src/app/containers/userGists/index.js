import React from "react";

import SearchHeader from "../../components/searchHeader";
import SearchForm from "../../components/searchForm";
import SearchResults from "../../components/searchResults";

/**
 * @description - show the user gists listing with search header. This will keep the user engaged and show some data on screen.
 */

function UserGists() {
  return (
    <div>
      <SearchHeader>
        <SearchForm />
      </SearchHeader>
      <div className="container">
        <SearchResults />
      </div>
    </div>
  );
}

export default UserGists;
