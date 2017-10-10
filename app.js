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
  "So let's choose a word!",
];

var counter = 0;

var hideStuff = [$("h4"), $("p3"), $("input"), $(".submitAnswer")];

var wordList = ["Apple", "Pie"];

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

function typeSpaces(header, str){
    var SI = setInterval(function(){
       var split = str.split(" _ ");
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
       setTimeout(function(){
            $("h4").text("");
            typeWords($("h4"), strings[2]);
            $("h4").text("");
            setTimeout(function(){
                createStickMan();
                setTimeout(function(){
                    createLetters();
                },2000);
            },2000);
       },6000);
   }, 2000);
});

function createStickMan(){
    var canvas = document.getElementById("stickman");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle="#FF0000";
    ctx.fillRect(20,20,150,100);
};

function createLetters(word){
    
    // Get Random Word from wordList Array
    
    var randomWord = Math.floor(Math.random() * wordList.length);
    var newWord = wordList[randomWord];
    console.log(newWord);
    
    // Get Word Length & Create Dashes
    
    for (var i = 0; i < newWord.length; i++){
      var letters = newWord.charAt(i);
      console.log(letters);
      var dashes = "_";
      for (var c = 0; c < letters.length; c++){
       var m = dashes;
       console.log(" " + m);
       $("p3").fadeIn("high");
       typeWords($("p3"), m);
       $("input").fadeIn("high");
       $(".submitAnswer").fadeIn("high");
      };
    };
        $(".submitAnswer").on("click", function(){
   
             var input = $("input");

             if(input.val().length != 1){
                 console.log("error");
                 alert("Your guess may only be one letter...");
             } else {
                 console.log("fine");
                 
                 for (var i = 0; i < newWord.length; i++){
                     var guess = input.val();
                     if (guess == newWord[i]){
                         newWord[i] = guess;
                         console.log(guess);
                         console.log("great");
                     } else {
                         console.log("not great");
                     };
                 };
                 
             };
   
        });
};


