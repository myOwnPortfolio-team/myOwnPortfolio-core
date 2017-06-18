# myOwnPortfolio (WORK IN PROGRESS)
__Author__: [Thibault THÉOLOGIEN](https://github.com/MacBootglass/)

__Languages__: [FR](./README.md) - [EN](./README_EN.md)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a6eb3104d78a43e7b16259f7f3d6be9f)](https://www.codacy.com/app/thibault-theologien/myOwnPortfolio?utm_source=github.com&utm_medium=referral&utm_content=MacBootglass/myOwnPortfolio&utm_campaign=badger)
[![Build Status](https://travis-ci.org/MacBootglass/myOwnPortfolio.svg?branch=master)](https://travis-ci.org/MacBootglass/myOwnPortfolio)

![65%](http://progressed.io/bar/65 "Avancement du projet")


## Description of the project
Fast generation and deployment of fully personnalisable multilingual portfolio.

Click __[here](https://macbootglass.github.io)__ to visualise a render example.

A Reveal.js presentation of the project is available __[here](http://macbootglass-presentations.azurewebsites.net/presentations/myOwnPortfolio/#/)__.

__[Documentation of JSON schemas](http://macbootglass.github.io/myOwnPortfolio/docs/json_schema/index.html)__

__[TodoList](https://github.com/MacBootglass/myOwnPortfolio/projects/1)__

__[Issues](https://github.com/MacBootglass/myOwnPortfolio/issues)__

## Requirements
### At least:
- [Docker](https://docs.docker.com)
- [docker-compose]() _(optional)_

### Optimal:
- [npm](https://docs.npmjs.com)
- [nodejs](https://nodejs.org/en/)
- [gulp](http://gulpjs.com)
- [sass](http://sass-lang.com)
- [json-sass](https://github.com/vigetlabs/sass-json-vars)
- [browserify](http://browserify.org) _(optional)_

__NOTE__: Using docker is not require with this configuration.

## Compilation
A directory named `dist` which contains all the website files will be automatically generated.

### Minimalist configuration
#### With Docker
- Create and start the compilation docker container.
```bash
$ docker run --name=compile_myownportfolio --volume=$(pwd):/root/project -it macbootglass/myownportfolio bash compile.sh
```
- Create and start the docker container which start the web server on the port 3000.
```bash
$ docker run --name=start_server_myownportfolio --volume=$(pwd):/root/project -it macbootglass/myownportfolio bash start_server.sh
```

#### With docker-compose
- Create and start the two containers:
```bash
$ docker-compose up -d
```

#### In both cases
- It's possible to restart the containers from the following command line:
```
$ docker start $container_name -d
```
(where `$container_name` equals `compile_myownportfolio` or `start_server_myownportfolio`).

### Optimal configuration
```bash
$ npm install
$ gulp
```


## Deployment
Several options are now available.
- to deploy on [github pages](https://pages.github.com)
- to deploy on a personal web server
- to start locally (localhost:3000)
