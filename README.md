# Dynamically generated tests in Mocha
This small example demonstrates how to dynamically pre-generate tests using before hook.

Let's imagine the situation you need to test a bunch of web-services which are developed as your system grows. There might be a third party applications that relies on these web-services, so you must make sure they are working properly. 

Let's imaging you have one web-service providing a list of available APIs in sub-paths format.
For example:

	[
	 "/categories/",
	 "/products/",
	 "/clients/"
	]

We can reuse it to pre-generate tests for all of these web-services.

## How to start:

```js
npm install
npm test
```
