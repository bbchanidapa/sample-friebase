const firebase = require('firebase')
const express = require('express')
const app = express()
const firebaseConfig = require('./config/firebase')

firebase.initializeApp(firebaseConfig)

firebase.database().ref('/').set({
    username: 'Borbee',
    email: 'borbee.developer@hotmail.com'
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`listening on ${port}`)
})