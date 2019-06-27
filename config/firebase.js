const firebaseConfig = {
    apiKey: "AIzaSyBgN2geTOsvIbx59TCYGSJgVPjG8R6taSs",
    authDomain: "lern-base.firebaseapp.com",
    databaseURL: "https://lern-base.firebaseio.com",
    projectId: "lern-base",
    storageBucket: "lern-base.appspot.com",
    messagingSenderId: "627628489369",
    appId: "1:627628489369:web:0f1e23f18d615919"
}

const connectedFirebase = () => {
    // var connectedRef = firebase.database().ref(".info/connected");
    // connectedRef.on("value", function (snap) {
    //     if (snap.val() === true) {
    //         console.log("connected");
    //     } else {
    //         console.log("not connected");
    //     }
    // })
}
module.exports = firebaseConfig
