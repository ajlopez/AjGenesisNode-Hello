# AjGenesisNode Hello

AjGenesisNode Hello tasks and templates.

## Installation

Install [AjGenesis for Node](https://github.com/ajlopez/AjGenesisNode) globally and this Hello module using:
```
npm install -g ajgenesis
npm install -g ajgenesisnode-hello
```
You should use `sudo` in Linux to install globally a module.


## Usage

In a worker directory, run:
```
ajgenesis hello:create myhello
```

A `myhello` folder is created, with `Hello.java`, `Hello.vb`, `Hello.cs`, `Hello.js`. An example:

```java

// Autogenerated with AjGenesis for Node.js
// https://github.com/ajlopez/AjGenesisNode

public class Hello {
	public static void main(String[] args) {
		System.out.println("Hello world");
	}
}

```
The message generate is `Hello world`. Alternatively, execute:
```
ajgenesis name=Adam hello:create helloadam
```
to generate other hello message `Hello Adam`.

## Versions

- 0.0.1: Published
- 0.0.2: Published
- 0.0.3: Published. Module call receives a callback
- 0.0.4: No automated install of hello, use explicitly `npm install -g`; `create` instead of `generate`

## Contribution

Feel free to [file issues](https://github.com/ajlopez/AjGenesisNode-Hello) and submit
[pull requests](https://github.com/ajlopez/AjGenesisNode-Hello/pulls) � contributions are
welcome.

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.
