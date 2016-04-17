# Dynamically generated tests in mocha
This small example demonstrates how to dynamically pre-generate tests using before hook.

Let's imagine the situation you need to test a bunch of web-services which are developed as your system grows. There might be a third party applications that relies on these web-services, so you must make sure they are working properly. In my case, I have a special service returning a list of sub-paths which I can reuse to pre-generate tests for all my dynamic web-services.

## How to start:

```js
npm install
npm test
```
