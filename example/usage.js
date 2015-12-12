var cert = require('..')

// Need to change path and user

cert({
    user: 'firstname@email.com',
    path: '/Users/username/appname appname.xcodeproj'
}, (err, result) => {
    console.log(`STDOUT:\n${result.stdout}`)
    console.log(`STDERR:\n${result.stderr}`)

    if (err) {
        if (err.killed) console.error(`Terminated: ${err.signal}`)
        if (err.code) console.error(`Exit Code: ${err.code}`)
        console.error(err.message)
    }
})
