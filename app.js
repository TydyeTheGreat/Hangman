'use strict';

// Variables

var config = {
    apiKey: "AIzaSyB-v7qSWUBWKaUigrkWkwCjxtkmmmOcDFY",
    authDomain: "hangman-69a47.firebaseapp.com",
    databaseURL: "hangman-69a47:.firebaseio.com",
    storageBucket: "gs://hangman-69a47.appspot.com",
  };
  
firebase.initializeApp(config);

const myModule = require('./words');
let val = myModule.hello();

// Detect if User Signed In

$(document).ready(function(){
    console.log("ready");
});

$(".singleplayer").on("click", function(){
   
});