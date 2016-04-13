# Express Domino-NSF

This is a project which makes use of the [domino-nsf](https://www.npmjs.com/package/domino-nsf) package from npm (the source of which is [nthjelme/nodejs-domino on GitHub](https://github.com/nthjelme/nodejs-domino)).

It creates a Node + Express app which reads, using the user's client Notes session, a given NSF's given View or given Documents, returning JSON formatted data.

## Installation

You _must_ have [IBM Notes](http://www-03.ibm.com/software/products/en/ibmnotes) installed and a properly configured Notes ID, with permissions to the NSF. The dependent `domino-nsf` package, which does the heavy lifting, still creates a Notes/Domino session, utilizing the C++ API.

## Usage

This currently requires [Node](https://nodejs.org/en/) v5, 32-bit arch. If you're a v4 LTS hold out like myself, installing and using [nvm-windows](https://github.com/coreybutler/nvm-windows) (a Windows version of [nvm](https://github.com/creationix/nvm)) is fairly easy and efficient to switching versions.

1. run from a machine with a working Notes installation (tested with Notes 9.0.1 FP5 on Windows)
2. clone down a copy of this project from GitHub `git clone https://github.com/edm00se/express-domino-nsf.git`
3. change the _database_ and _server_ properties by _either_
  * changing their values in `config/index.js` _or_
  * setting the `DOM_SRV` and `DOM_DB` environment variables, respectively (they will be picked up by the Node server instance)
4. fill in your endpoint usage instructions to the `public/readme.html` file
5. install dependencies, via `npm install`
6. run the server instance via `node server.js` (or `npm start`); the port it will run on is either from what it receives in the `PORT` environment variable or it will default to port `3333`

## Contributing

1. [Fork it!](https://github.com/edm00se/express-domino-nsf#fork-destination-box)
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit [a pull request](https://github.com/edm00se/express-domino-nsf/compare) :D

## Credits

- [Nils Tarjei Hjelme](https://medium.com/@nthjelme), aka- [@nthjelme](https://github.com/nthjelme) for creating the [domino-nsf](https://www.npmjs.com/package/domino-nsf) package
- the [dominonodejs chat](https://openntf.slack.com/messages/dominonodejs/) on [OpenNTF Slack](http://openntfslackin.mybluemix.net/)

## License

The MIT License (MIT)