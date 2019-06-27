const firebase = require('firebase')
const express = require('express')
const app = express()
const firebaseConfig = require('./config/firebase')

firebase.initializeApp(firebaseConfig)

firebase.database().ref('/events/down_port/')
    .on("child_added", (e) => { console.log('LOG: ', e.val()) })

app.post('/', (req, res) => {
    console.log('res:: ', req.body)
    firebase.database().ref('/events/down_port').push({
        user: 'user:02',
        date: "1/02/2019"
    })
})


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`listening on ${port}`)
})