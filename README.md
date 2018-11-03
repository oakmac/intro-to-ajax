# Introduction to AJAX

This repo contains exercises to introduce students to [AJAX].

These exercises assume some previous knowledge of JavaScript and basic DOM
interaction.

[AJAX]:https://en.wikipedia.org/wiki/Ajax_(programming)

## Instructions

1. Clone this repo
1. Start a [local web server](#running-a-local-web-server) in the main directory
1. Load the file in your web browser from your local server
1. Instructions can be found in the JavaScript files. Starting with `js/basic-ajax.js`

## Running a local web server

Web browsers will not allow AJAX requests to be made against the local filesystem for security reasons.
This means that you cannot simply drag the `index.html` file onto your browser to view this exercise; you must run a local web server.

Assuming you have [Node.js] and [npm] installed:

```sh
# install the npm "serve" module globally
sudo npm install -g serve

# cd into the directory you want to run your local web server

# start the web server
serve

# serve should show some output to your terminal with a URL
# load that URL in your browser to view this exercise
```

[Node.js]:https://nodejs.org/
[npm]:https://www.npmjs.com/get-npm

## License

[ISC License](LICENSE.md)
