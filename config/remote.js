var Client = require('ssh2').Client

var conn = new Client()
conn.on('ready', () => {
    console.log('Client :: ready')
    conn.shell((err, stream) => {
        if (err) throw err
        stream.on('close', () => {
            console.log('Stream :: close')
            conn.end()
        }).on('data', (data) => {
            console.log('OUTPUT: ' + data)
        }).end([
            'cd Desktop/BB',
            'ls -la',
            'exit'].join('\n'))
    })
}).connect({
    host: '',
    port: 22,
    username: '',
    password: ''
})