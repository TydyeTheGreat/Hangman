'use strict';

// Variables

var config = {
    apiKey: "AIzaSyB-v7qSWUBWKaUigrkWkwCjxtkmmmOcDFY",
    authDomain: "hangman-69a47.firebaseapp.com",
    databaseURL: "hangman-69a47:.firebaseio.com",
    storageBucket: "gs://hangman-69a47.appspot.com",
  };
  
firebase.initializeApp(config);

var strings = [
  "Welcome to Hangman",
  "The computer will generate a random word, your goal is to guess the correct letters before your body goes rip!",
];

var counter = 0;

var hideStuff = [$("h4")];

// Setup Website

$(document).ready(function(){
    console.log("ready");
    for (var i = 0; i < hideStuff.length; i++){
      hideStuff[i].hide();  
    };
});

// Start Single Player

function typeWords(header, str){
    var SI = setInterval(function(){
       var split = str.split("");
       header.append(split[counter]);
       counter++;
       if(counter==str.length){counter = 0, clearInterval(SI)};
    },50);
};

$(".singleplayer").on("click", function(){
// Fade Out Current Buttons
   $("h1").hide();
   $("h2").hide();
   $("p").hide();
   $("p2").hide();
   $(this).hide();
// Fade In Text
   $("h4").fadeIn("high");
   typeWords($("h4"), strings[0]);
   setTimeout(function(){
       console.log("kk");
       $("h4").text("");
       typeWords($("h4"), strings[1]);
   }, 2000);
});



