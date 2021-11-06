const BASE_URL = "https://api.github.com";

/**
 * @param {string} username - username of gist user
 * @returns json response on success or throw Error
 * @description - getAllGistUrl returns all the gists of that user
 */
const getAllGistUrl = (username) => {
  return `${BASE_URL}/users/${username}/gists`;
};

/**
 * @param {string} gistId - gistId of the gist
 * @returns json response on success or throw Error
 * @description - getSingleGistUrl returns all details of the single gist
 */
const getSingleGistUrl = (gistId) => {
  return `${BASE_URL}/gists/${gistId}`;
};

export { getAllGistUrl, getSingleGistUrl };
