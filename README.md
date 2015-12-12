# fastlane-cert

[![NPM version](https://badge.fury.io/js/fastlane-cert.png)](http://badge.fury.io/js/fastlane-cert)
[![Build Status](https://travis-ci.org/Georgette/fastlane-cert.svg?branch=master)](https://travis-ci.org/Georgette/fastlane-cert)
[![Coverage Status](https://coveralls.io/repos/Georgette/fastlane-cert/badge.png?branch=master)](https://coveralls.io/r/Georgette/fastlane-cert?branch=master)

Node wrapper for [Ruby Fastlane Cert ](https://github.com/fastlane/cert)module

## example

```javascript

var cert = require('fastlane-cert')

cert({
    user       : 'firstname@email.com'
    path       : '/Users/username/appname appname.xcodeproj'
}, (err, result) => {
    console.log(`STDOUT:\n${result.stdout}`)
    console.log(`STDERR:\n${result.stderr}`)

    if (err) {
        if (err.killed) console.error(`Terminated: ${err.signal}`)
        if (err.code) console.error(`Exit Code: ${err.code}`)
        console.error(err.message)
    }
})

```

## api

```javascript
var cert = require('fastlane-cert')

```
# cert([options],[callback])

Accepts options as an object; see tables below for a list of both runtime options, and cert options.

### Cert Options

|Cert Option |Example|Description|Command Executed|
|-------------|-------|-----------|----------------|
| output      | { output: outputDirectoryPath } | generates the cert in a specific directory | -o {outputDirectoryPath} |                                                                                                                  | user (string)       |  { user:username } | Your Apple ID Username | -u {user} |  
| teamId(string) | { teamId:'ekjo' } |   The ID of your team if you're in multiple teams | -b {teamId} |  
| teamName(string) | { teamName:'teamA' }   | The name of your team if you're in multiple teams | -l {teamName}
| keychainPath(string) | { keychainPath : '/' } | Path to a custom keychain | -k {keychainPath}|
| development(boolean) | { development:true } | Create a development certificate instead of a distribution one | --development |
| force (boolean)       | { force:true }  | Create a certificate even if an existing certificate exists | --force |                              

### Runtime options

|Runtime Option |Example|Description|
|----------------|-------|-----------|
|timeout (number)| { timeout:0 } | specify when to exit execution in case of error |
|password (string)| {password:''} | app store password for signing|
|path (string)| {path:'/'} | path of directory where Cert executes|

## install

With [npm](https://npmjs.org) do:

```
npm install --save fastlane-cert
```

## testing

`npm test`

### coverage

`npm run view-cover`

This will output a textual coverage report.

`npm run open-cover`

This will open an HTML coverage report in the default browser.
