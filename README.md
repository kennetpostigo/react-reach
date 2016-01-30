# react-reach
> A small library for react to communicate with graphQL

[![travis build](https://img.shields.io/travis/kennetpostigo/react-reach.svg?style=flat-square)](https://travis-ci.org/kennetpostigo/react-reach)
[![codecov coverage](https://img.shields.io/codecov/c/github/kennetpostigo/react-reach.svg?style=flat-square)](https://codecov.io/github/kennetpostigo/react-reach)
[![version](https://img.shields.io/npm/v/react-reach.svg?style=flat-square)](http://npm.im/react-reach)
[![downloads](https://img.shields.io/npm/dm/react-reach.svg?style=flat-square)](http://npm-stat.com/charts.html?package=react-reach&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/react-reach.svg?style=flat-square)](http://opensource.org/licenses/MIT)

react-reach helps you write applications that use tools you are familiar with from the
react ecosystem. react-reach is designed to be used along side redux and react.
React-reach works as the layer that handles communication of data between React
and graphQL. Reach enables developers to make queries and mutations against GraphQL.

## The need for react-reach
When developing applications with react everything goes smoothly until you begin
to account for request to the server. Usually you would go about making network
request to specified endpoints with REST, or networks request to `"/graphql"`
if you use GraphQL. Now Relay may come to mind, and what makes reach different
is that it only does one thing. You can use reach along Redux.

## Features are a Work In Progress
* [x] __Talk to a GraphQL server__
* [x] __Cache responses in [Redux](https://github.com/rackt/redux) store__
* [ ] __Optimistic Updates__
* [x] __When used with [react-router](https://github.com/rackt/react-router) dynamically request data needed `onEnter` & `onLeave` Hooks__

```js
npm install --save react-reach
```
## Usage

react-reach makes fetching data from a GraphQL server as easy as this:
```js
//reachGraphQL() to make a query for some data, or add mutation
//I created this function with for simply communicating back and forth with graphQL
//params: reachGraphQL(url, query/mutation, queryParameters)

import { reachGraphQL } from 'react-reach';

reachGraphQL('localhost:1000', `{
    user(id: "1") {
        name
    }
}`, {});


//reachWithDispatch() to make a query and dispatch actionCreator passed in
//I created this function for receiving data from the server and automatically caching it in the redux store.
//To be used with redux-thunk or any similar middleware.
//params: reachWithDispatch(url, query/mutation, queryParameters, actionCreator)

import { reachWithDispatch } from 'react-reach';

reachWithDispatch('localhost:1000', `{
    user(id: "1") {
        name
    }
}`, {}, somePredefinedActionCreator);


//reachWithOpts() to make a query and dispatch specified actionCreators from an Object  passed in
//I created this function for sending data to the server and optimistically updating the redux store client-side
//To be used with redux-thunk or any similar middleware.
//params: reachWithDispatch(url, query/mutation, queryParameters, actionCreator, store, retry)
//Automatically handles updating redux store client-side
//This function is still a WIP not implemented

import { reachWithOpts } from 'react-reach';

reachWithOpts('localhost:1000', `mutation {
    CreateUser {
        _id: "12345",
        name: JohnDoe
    }
}`, {}, ObjectContainingActionCreators, store, true);
```

## Caveat

Make sure to enable CORS on your server __ with OPTIONS __ to avoid CORS error
or Preflight fetch error. Heres an example when using Express:

```js
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

	if (req.method === "OPTIONS") {
		res.status(200).end();
	} else {
		next();
	}
	next();
});
```

## The State of react-reach
I began working on react-reach the past few day. I hope people are willing to
try it out and help me spot bugs and problems.Feel free to give me feedback and
request features you would like to see in the project.
