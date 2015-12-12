var proxyquire = require('proxyquire'),
    test       = require('tape'),
    sinon      = require('sinon')

var exec = sinon.stub().callsArgWith(2, null, '', '')
var child_process = { exec }
var cert = proxyquire('..', { child_process })

test('accepts no options', (t) => {
    t.plan(1)
    exec.reset()
    cert(() => {
        t.pass('function called')
    })
})

test('accepts no args', (t) => {
    t.plan(1)
    exec.reset()
    t.doesNotThrow(cert)
})

test('accepts a user option', (t) => {
    t.plan(1)
    exec.reset()
    cert({ user: 'gege' }, () => {
        t.ok(exec.calledWith('cert -u gege'), 'cert called with -u')
    })
})

test('accepts a profile option of output path', (t) => {
    t.plan(1)
    exec.reset()
    cert({ output: '/' }, () => {
        t.ok(exec.calledWith('cert -o /'), 'generate cert in particular directory -o')
    })
})

test('accepts a profile option of keychainPath ', (t) => {
    t.plan(1)
    exec.reset()
    cert({ keychainPath: '/' }, () => {
        t.ok(exec.calledWith('cert -k /'), 'cert called with a custom keychain path -k')
    })
})

test('accepts a profile option teamId', (t) => {
    t.plan(1)
    exec.reset()
    cert({ teamId: 'ejoi' }, () => {
        t.ok(exec.calledWith('cert -b ejoi'), 'cert called with teamId specified -b')
    })
})

test('accepts a profile option teamName', (t) => {
    t.plan(1)
    exec.reset()
    cert({ teamName: 'teamA' }, () => {
        t.ok(exec.calledWith('cert -l teamA'), 'cert called with teamName specified -l')
    })
})

test('accepts an option of force', (t) => {
    t.plan(1)
    exec.reset()
    cert({ force: true }, () => {
        t.ok(exec.calledWith('cert --force'), 'cert called with force provision renewal flag --force')
    })
})

test('accepts a profile option of development', (t) => {
    t.plan(1)
    exec.reset()
    cert({ development: true }, () => {
        t.ok(exec.calledWith('cert --development'), 'cert called with --development')
    })
})

test('accepts a runtime option of timeout', (t) => {
    t.plan(1)
    exec.reset()
    cert({ timeout: 1 }, () => {
        t.ok(exec.calledWithMatch('cert', { timeout: 1 }), 'cert called with timeout runtime option')
    })
})

test('accepts a runtime option of password', (t) => {
    t.plan(1)
    exec.reset()
    cert({ password: 'password' }, () => {
        t.ok(exec.calledWithMatch('cert', { env: { FASTLANE_PASSWORD: 'password' } }), 'cert called with password runtime option')
    })
})

test('accepts a runtime option of path', (t) => {
    t.plan(1)
    exec.reset()
    cert({ path: '/something' }, () => {
        t.ok(exec.calledWithMatch('cert', { cwd: '/something' }), 'cert called with runtime path')
    })
})
