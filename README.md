# GIST-Demo 
React Single Page Application demo that uses Github Gist API to get full list all public gists for a user.

## Description
ReactJS Single Page App demo which has the following features:
1. Search: When a user enters a username, it should be able to get a full list of public gists by that user.
2. Filetype: Convert the filetypes of the files in the gist into a tag/badge, (e.g, if the returned gist has list of files containing python and javascript files, the gist should have the respective tags/badges). 
3. Fork: Username/Avatar of the last 3 users who forked it with avatar linking to the fork. 


## Implementation Plan 
1. Break down functionality, one page would be list of gists of that user.
2. Second page would be gist details, including recent users fork.
3. This would include routing as well navigating to single gist screen from listing.
4. From search bar results, we will fetch gists listing store can be used to save all gists,
so that we can propagate it into results component.
5. Used jsDocs to provide better visibility on network and config calls.
6. Zustand being used as store management tool, which is based on hooks with minimal boilerplate code as compared to redux
7. App structure breakdown into reusable components, containers (with routes), store, network and config folder.

### Enhancements (Nice to have)
8. Api calls can be written with in hooks communicating to store if same functionality being used more than one time (ENHANCEMENT)
9. When loading a list we can use card skeletons to provide better UX (https://www.npmjs.com/package/react-loading-skeleton) (ENHANCEMENT)
10. Listing api call can be cached when searching frequent used terms would take items from cache instead of api call. This would decrease load time (ENHANCEMENT) LRU/MRU approach
11. axios-hooks library can be used which is based on hooks and gives us default error and loading state instead of declaring it via useStates (ENHANCEMENT) https://www.npmjs.com/package/axios-hooks
12. Unit test cases can be added via Jest. Also snapshots tests for UI. (ENHANCEMENT)
13. Error logging can be done on FE. Incase of any downtime, error can be logged into any analytics tool. (ENHANCEMENT)

## Application Structure

NOTE: it is fine to place project files in either `src` or in the root `.` directory. It is recommended place items in `src` to make the root folder a bit easier to navigate.

Files in the React.js project should be generally be structured as the following.

```
- __Gist\-demo__
   - [README.md](README.md)
   - [node\_modules](node_modules)
   - [package.json](package.json)
   - __public__
     - [favicon.ico]
     - [index.html]
     - [logo192.png]
     - [logo512.png]
     - [manifest.json]
     - [robots.txt]
   - __src__
     - [App.js](src/App.js)
     - [App.test.js](src/App.test.js)
     - __app__
       - __components__
         - __avatar__
           - [index.js](src/app/components/avatar/index.js)
           - [styles.css](src/app/components/avatar/styles.css)
         - __badge__
           - [index.js](src/app/components/badge/index.js)
           - [styles.css](src/app/components/badge/styles.css)
         - __forks__
           - [index.js](src/app/components/forks/index.js)
         - __gistCard__
           - [index.js](src/app/components/gistCard/index.js)
           - [styles.css](src/app/components/gistCard/styles.css)
         - __searchForm__
           - [index.js](src/app/components/searchForm/index.js)
         - __searchHeader__
           - [index.js](src/app/components/searchHeader/index.js)
           - [styles.css](src/app/components/searchHeader/styles.css)
         - __searchResults__
           - [index.js](src/app/components/searchResults/index.js)
           - [styles.css](src/app/components/searchResults/styles.css)
       - __config__
         - [index.js](src/app/config/index.js)
       - __containers__
         - __gistDetails__
           - [index.js](src/app/containers/gistDetails/index.js)
           - [styles.css](src/app/containers/gistDetails/styles.css)
         - __userGists__
           - [index.js](src/app/containers/userGists/index.js)
       - __network__
         - [index.js](src/app/network/index.js)
       - __store__
         - [index.js](src/app/store/index.js)
         - [store.js](src/app/store/store.js)
     - [index.css](src/index.css)
     - [index.js](src/index.js)
     - [logo.svg](src/logo.svg)
     - [reportWebVitals.js](src/reportWebVitals.js)
     - [setupTests.js](src/setupTests.js)
   - [yarn.lock](yarn.lock)
```
## Getting Started and Installing
These instructions will help you running on your local machine for development and testing purposes.

* First Git clone the repo into your computer
```
git clone https://github.com/madeeha96/Gist-demo.git
```
* Open your terminal
```
$ cd Gist-demo
$ yarn
```
* This should install all the dependencies. Once done
* Run 
``` 
$ yarn start
or
$ npm install
$ npm start
```
* to start the server.
* open (http://localhost:3000) in your browser. 

