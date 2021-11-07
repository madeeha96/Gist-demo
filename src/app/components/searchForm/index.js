import React, { useRef } from "react";
import { fetchGetRequest } from "../../network";
import { getAllGistUrl } from "../../config";
import store from "../../store";

/**
 * @description - Search bar taking username input and fetching user gists from api and saving it into zustand store.
 */

function SearchForm(props) {
  const inputRef = useRef();
  const { setUsername, setGists, setGistsErr, setGistsLoading } = store();

  const fetchAllGists = async (username) => {
    try {
      setGistsLoading(true);
      const res = await fetchGetRequest(getAllGistUrl(username));
      if (res.length) {
        //if there is data returned by Github API
        setUsername(username);
        setGists(res);
      } else {
        setGistsErr(`0 Gists Found for ${username}`);
      }
    } catch (err) {
      console.log(`failed on fetching user gits`, err);
      setGistsErr(`Some problem while fetching call: ${err.message}`);
    } finally {
      setGistsLoading(false);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let username = inputRef.current.value.trim();

    //if user has not typed anything
    if (username.length === 0) {
      return;
    }
    fetchAllGists(username);
  };
  return (
    <form onSubmit={handleSubmit} className="searchform">
      <label />
      <input
        className="form-control"
        type="text"
        placeholder="Search by user, eg. octate."
        ref={inputRef}
      />
    </form>
  );
}

export default SearchForm;
