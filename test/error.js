var proxyquire = require('proxyquire'),
    test       = require('tape'),
    sinon      = require('sinon')

var error = new Error('boom')
var exec = sinon.stub().callsArgWith(2, error, '', '')
var child_process = { exec }
var cert = proxyquire('..', { child_process })

test('cert wrapper callback receives exec errors', (t) => {
    exec.reset()
    cert({ identifier: 'test.test.123' }, (err) => {
        t.equal(err, error, 'got error')
        t.end()
    })
})
