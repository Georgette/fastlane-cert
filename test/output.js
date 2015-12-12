var proxyquire = require('proxyquire'),
    test       = require('tape'),
    sinon      = require('sinon')

var exec = sinon.stub().callsArgWith(2, null, 'stdout', 'stderr')
var child_process = { exec }
var cert = proxyquire('..', { child_process })

test('cert wrapper callback receives a result object', (t) => {
    exec.reset()
    cert((_, result) => {
        t.equal(result.stdout, 'stdout', 'result object has stdout')
        t.equal(result.stderr, 'stderr', 'result object has stderr')
        t.end()
    })
})
