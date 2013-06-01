# AjGenesisNode Hello

AjGenesisNode Hello tasks and templates.

## Installation

Install [AjGenesis for Node](https://github.com/ajlopez/AjGenesisNode) globally using:
```
npm install -g ajgenesis
```
Then, in a working directory, execute:
```
npm install ajgenesisnode-hello
npm link ajgenesis
```

## Usage

Execute:
```
ajgenesis hello:generate
```

A `build` folder is created, with `Hello.java`, `Hello.vb`, `Hello.cs`, `Hello.js` and other files.

Alternatively, execute:
```
ajgenesis name=Adam hello:generate
```
to generate other hello messages.

## Versions

- 0.0.1: Published

## Contribution

Feel free to [file issues](https://github.com/ajlopez/AjGenesisNode-Hello) and submit
[pull requests](https://github.com/ajlopez/AjGenesisNode-Hello/pulls) — contributions are
welcome.

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.
