
/**
 * @param {string} url - url of the api
 * @returns json response on success or throw Error
 * @description - Make Network calls, fetch() Promise API's catch block/error handling should be invoked outside, or else req can fail silently
   without the caller being notified
 */
const fetchGetRequest = async (url) => {
    const rawResponse = await fetch(url);
    //if 200
    if (rawResponse.ok) {
        return rawResponse.json();
    } else {
        throw new Error(rawResponse.status);
    }
}

//You can add more types of call below eg. POST, PUT, PATCH etc. 

export {fetchGetRequest};