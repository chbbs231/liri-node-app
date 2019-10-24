require("dotenv").config()
const keys = require('./keys.js')

const userin = process.argv[2]
let userval =process.argv.slice(3).join("")

const axios = require('axios')
const inquirer = require('inquirer')
const moment = require('moment')
const spotify = require('node-spotify-api')
const fs = require('fs')
const[ node, file, ... args] = process.argv

if(args[0] === 'movie this'){
    if(args[1]=== undefined){
        getMovie('Mr. +Nobody')
    }
    else{
        getMovie(args.slice(1).join("+"));
    }
};

if(args[0] === "spotify-this-song"){
    if(args[1] === undefined){
        spotifySong("I want it that way")
    }
    else{
        let songTitle = args.slice(1).join(" ");
        spotifySong(songTitle)
    }
};
if(args[0] === "do-what-it-says"){
    fs.readFile("random.txt", "utf8", function (e, data) {
        if (e){
            return console.log(e)
        }
        dataArr = data.split(",");
        if (dataArr[0] === "movie-this"){
            if(dataArr[1] === undefined){
                getMovie("Mr. +Nobody")
            }
            else{
                getMovie(dataArr[1].split("+"))
            }
        };
        if(dataArr[0] === "spotify-this-song"){
            if(dataArr[1]=== undefined){
                spotifySong("I want it That way")
            }
            else{
                spotifySong(dataArr[1])
            }

        }
    }) 
}
 function spotifySong(songName){
     spotify.search({type:'track', query: songName, limit:5}, function(e, data){
         if(e){
             return console.log('Error')
         }
         data.tracks.item.foreach(function(element){
             console.log("");
             console.log(`Artist :${element.artist[0].name}`);
             console.log(`Song: ${songName}`);
             console.log(`Spotify Preview Link: ${element.preview_url}`);
             console.log(`Album: ${element.album.name}`);
         })
     })
 }

axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=9126697e')
.then (data => {
    console.log(data)
})
.catch(e => console.log(e))

const getConcert = function(input){
    if (input ===''|| typeof input === typeof underfined){
        input = 'New Kids on the Block';
        userval ='New Kids on the Block';
    };
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function(response){
            if (response.data.length ===0){
                console.log("Try again! ")
            fs.appendFile('random.txt')
            }
        })
}