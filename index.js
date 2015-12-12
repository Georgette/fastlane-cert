var exec = require('child_process').exec

module.exports = cert

function cert (options, cb) {

    if (typeof options === 'function') {
        cb = options
        options = {}
    }
    options = options || {}
    cb = cb || function () {}
    options.timeout = options.timeout !== undefined ? options.timeout : 0

    var cmd = 'cert'
    if (options.user)           cmd += ` -u ${options.user}`
    if (options.teamId)         cmd += ` -b ${options.teamId}`
    if (options.teamName)       cmd += ` -l ${options.teamName}`
    if (options.output)         cmd += ` -o ${options.outputPath}`
    if (options.keychainPath)   cmd += ` -k ${options.keychainPath}`
    if (options.development)    cmd += ' --development'
    if (options.force)          cmd += ' --force'

    var runtimeOptions = { env: Object.assign({}, process.env) }

    if (options.timeout) runtimeOptions.timeout = options.timeout
    if (options.password) runtimeOptions.env.FASTLANE_PASSWORD = options.password
    if (options.path) runtimeOptions.cwd = options.path

    exec(cmd, runtimeOptions, (err, stdout, stderr) => {
        cb(err, { stdout, stderr })
    })

}
