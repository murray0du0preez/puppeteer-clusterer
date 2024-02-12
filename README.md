# Puppeteer Clusterer

[![npm](https://img.shields.io/npm/v/puppeteer-clusterer)](https://www.npmjs.com/package/puppeteer-clusterer)
[![npm download count](https://img.shields.io/npm/dm/puppeteer-clusterer)](https://www.npmjs.com/package/puppeteer-clusterer)
[![MIT License](https://img.shields.io/npm/l/puppeteer-clusterer.svg)](#license)

An unoffical updated version of [puppeteer-cluster](https://github.com/thomasdondorf/puppeteer-cluster) with fixes and other miscellaneous changes based on [zek's](https://github.com/zek/puppeteer-cluster) fork

- [Installation](#installation)
- [Examples](#examples)
- [License](#license)

## Installation

Install using `npm`:

```sh
npm i puppeteer # in case you don't already have it installed 
```
```
npm i puppeteer-clusterer
```

Alternatively, use `yarn`:
```
yarn add puppeteer puppeteer-clusterer
```

## Examples
* [Simple example](examples/minimal.js)
* [Wait for a task to be executed](examples/execute.js)
* [Minimal screenshot server with express](examples/express-screenshot.js)
* [Deep crawling the Google search results](examples/deep-google-crawler.js)
* [Crawling the Alexa Top 1 Million](examples/alexa-1m.js)
* [Queuing functions (simple)](examples/function-queuing-simple.js)
* [Queuing functions (complex)](examples/function-queuing-complex.js)
* [Error handling](examples/error-handling.js)
* [Using a different puppeteer library (like puppeteer-core or puppeteer-firefox)](examples/different-puppeteer-library.js)
* [Provide types for input/output with TypeScript generics](examples/typings.ts)

## License

[MIT license](./LICENSE)
