require("dotenv").config();

//node packages and files
const keys= require('./keys.js');
const axios = require('axios');
const inquirer = require('inquirer');
const moment = require('moment');
const spotify = require('node-spotify-api');
const fs = require("fs");


const nodeArgv = process.argv;
const command = process.argv[2];

let x = "";
for(var i = 3; i<nodeArgv.length; i++){
    if(i>3 && i<nodeArgv.length){
        x = x + " + " + nodeArgv[i];
    }
    else{
        x = x + nodeArgv[i];
    }
}

switch(command){
    case "spotify-this-song":
        if(x){
        spotifySong(x);
    } else {
        spotifySong("I want it that Way")
    }
        break;

    case "movie-this":
        if(x){
         movieThis(x);
        } else{
            movieThis("Mr. Nobody")
        }
        break;
    
    case "do-what-it-says":
        downWhatItSay();
        break;
    case "concert-this":
        concertThis();
        break;
    default:
         console.log("Please Pick one: do-what-it-says,spotify-this-song, movie-this, concert-this")
    break;   
}

 function spotifySong(song){
     Spotify.search({type:'track', query: song}, function(e, data){
         if(!e){
             for(let i = 0; i < data.tracks.items.length; i++){
          let songData =data.tracks.items[i];

             console.log("");
             console.log(`Artist :${songData.artist[0].name}`);
             console.log(`Song: ${songData.name}`);
             console.log(`Spotify Preview Link: ${songData.preview_url}`);
             console.log(`Album: ${songData.album.name}`);
             console.log("------------------------")

             fs.appendFile('log.txt', songData.artists[0].name);
             fs.appendFile('log.txt', songData.name);
             fs.appendFile('log.txt', songData.preview_url);
             fs.appendFile('log.txt', songData.album.name);
             fs.appendFile('log.txt', "-----------------------");
         }
        }else{c
            onsole.log('error')}
     })
 }

function movieThis(movie){
axios.get(`http://www.omdbapi.com/?t=${movieName}apikey=9126697e`)
.then(function(movie)  {
    console.log("");
    console.log(`Title: ${movie.data.Title}`)
    console.log(`Year: ${movie.data.Year}`)
    console.log(`IMDB Rating: ${movie.data.Rating[0].value}`
    )
    console.log(`Rotten Tomatoes Rating: ${movie.data.rating[1]}`)
    console.log(`Country:${movie.data.Country} `)
    console.log(`Language:${movie.data.Lanuage}`)
    console.log(`Plot: ${movie.data.Plot}`)
    console.log(`Actors:${movie.data.Actors}`)
})
}
