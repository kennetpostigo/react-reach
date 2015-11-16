# react-reach
> A small library for react to communicate with graphQL

[![travis build](https://img.shields.io/travis/kennetpostigo/react-reach.svg?style=flat-square)](https://travis-ci.org/kennetpostigo/react-reach)
[![codecov coverage](https://img.shields.io/codecov/c/github/kennetpostigo/react-reach.svg?style=flat-square)](https://codecov.io/github/kennetpostigo/react-reach)
[![version](https://img.shields.io/npm/v/react-reach.svg?style=flat-square)](http://npm.im/react-reach)
[![downloads](https://img.shields.io/npm/dm/react-reach.svg?style=flat-square)](http://npm-stat.com/charts.html?package=react-reach&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/react-reach.svg?style=flat-square)](http://opensource.org/licenses/MIT)

It helps you write applications that use tools you are familiar with from the
react ecosystem. react-reach is designed to be used along side redux and react.
React-reach works as the layer that handles communication of data between React
and graphQL.

## The need for react-reach
When developing applications with react everything goes smoothly until you begin
to account for request to the server. Usually you would go about making network
request to specified endpoints with REST, or networks request to `"/graphql"`
if you use GraphQL. Now Relay may come to mind, and what makes reach different
is that it only does one thing. You can think about it as a more functional
approach and striped down version of Relay. Never will you have to use classes
 with reach.

## The Goal
The goal is to make fetching data from a GraphQL server as easy as this:
```javascript
Todo = reach.createContainer(TodoApp, {
     query {
          items
     }
});
```

## Status on react-reach
I have just began working on react-reach and it is still under development. Stay tuned.
Project Started 11/14/2015
