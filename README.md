# GIST-Demo 
React Single Page Application demo that uses Github Gist API to get full list all public gists for a user.

## Description
ReactJS Single Page App demo which has the following features:
1. Search: When a user enters a username, it should be able to get a full list of public gists by that user.
2. Filetype: Convert the filetypes of the files in the gist into a tag/badge, (e.g, if the returned gist has list of files containing python and javascript files, the gist should have the respective tags/badges). 
3. Fork: Username/Avatar of the last 3 users who forked it with avatar linking to the fork. 

## Application Structure

NOTE: it is fine to place project files in either `src` or in the root `.` directory. It is recommended place items in `src` to make the root folder a bit easier to navigate.

Files in the React.js project should be generally be structured as the following.

```
├── README.md
├── components
│   ├── Fork.tsx
│   ├── SearchBar.tsx
│   ├── ...
│   ├── common
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── List.tsx
│   │   ├── Navbar.tsx
│   │   └── Tile.tsx
│   └── containers
│       ├── SearchAndResults.tsx
│       └── GistDetails.tsx
├── lib
│   └── globalStyles.ts
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── fonts
│   │   ├── Campton-Book.otf
│   │   ├── ...
│   ├── images
│   │   ├── ...
│   ├── logos
│   │   ├── ...
│   └── vectors
│       ├── ...
├── tsconfig.json
└── yarn.lock
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

