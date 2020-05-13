'use strict';

var uniqueIndexArray = [];
var allBusMall = [];
var parentElement = document.getElementById('container');
var totalVotes = 0;
var names = [];
var votes = [];
var views = [];

// render three images to the DOM
// create a constructor function
// filepath
// alt
// title
// push object instance into an array

function BusmallImage(name, extension){
  this.filepath = `img/${name}${extension}`;
  this.alt = name;
  this.title = name;
  this.votes = 0;
  this.views = 0;
  allBusMall.push(this);
}

BusmallImage.prototype.render = function(){

  var imageElement = document.createElement('img');
  imageElement.src = this.filepath;
  imageElement.art = this.alt;
  imageElement.title = this.title;
  parentElement.appendChild(imageElement);

}

new BusmallImage('bag', '.jpg');
new BusmallImage('banana', '.jpg');
new BusmallImage('bathroom', '.jpg');
new BusmallImage('boots', '.jpg');
new BusmallImage('breakfast', '.jpg');
new BusmallImage('bubblegum', '.jpg');
new BusmallImage('chair', '.jpg');
new BusmallImage('cthulhu', '.jpg');
new BusmallImage('dog-duck', '.jpg');
new BusmallImage('dragon', '.jpg');
new BusmallImage('pen', '.jpg');
new BusmallImage('pet-sweep', '.jpg');
new BusmallImage('scissors', '.jpg');
new BusmallImage('shark', '.jpg');
new BusmallImage('sweep', '.png');
new BusmallImage('tauntaun', '.jpg');
new BusmallImage('unicorn', '.jpg');
new BusmallImage('usb', '.gif');
new BusmallImage('water-can', '.jpg');
new BusmallImage('wine-glass', '.jpg');



function getRandomIndex(){


  var index = getRandomNumber(allBusMall.length);

  // this while loop will check to make sure that my index is unique will get a index if it is in the uniqueIndexArray
  while(uniqueIndexArray.includes(index)){
    index = getRandomNumber(allBusMall.length);
  }

  uniqueIndexArray.push(index);

  // if my array is more then 6 items long, I need to shift rom the beginning
  if(uniqueIndexArray.length > 6){
    uniqueIndexArray.shift();
  }

  // select a random image from that array to render
  // helper function to generate a random number between 0 and the length of the array
  // render that object instance at that index to the DOM

  // make sure that the images are unique (to eah other and previous images)
  // -- come back to this in a minute --


  return index;
}

function getRandomNumber(max){
  return Math.floor(Math.random() * max);
}

function displayImage(){
  var index = getRandomIndex();
  allBusMall[index].views++;
  allBusMall[index].render();
}

function handleClick(event){
  // first - empty everything out
  parentElement.textContent = '';

  // figure out what was clicked
  var titleOfTheThingThatWasClickedOn = event.target.title;

  // loop through all of my object instance to compare title so that I can find tha one that was clicked on
  for(var i=0; i<allBusMall.length; i++){
    if(titleOfTheThingThatWasClickedOn === allBusMall[i].title){
      // woot! I found it! Add a Vote.
      allBusMall[i].votes++;
      totalVotes++;

      if(totalVotes === 25){
        // turn off event listener
        parentElement.removeEventListener('click', handleClick);
        makeNamesArray();
      }
    }
  }

  displayImage();
  displayImage();
  displayImage();
  // listen for a click and render new images when we hear it
  // need to keep track of views and votes

}

displayImage();
displayImage();
displayImage();

parentElement.addEventListener('click', handleClick);

// only allow 25 votes
// show results at the end

// loop over all of my items and make an array of st tge name of my items
function makeNamesArray(){
  for(var i=0; i<allBusMall.length; i++){
    names.push(allBusMall[i].title);
    votes.push(allBusMall[i].votes);
    views.push(allBusMall[i].views);
  }

  generateChart();
}


function generateChart(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: '# of Votes',
        data: votes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 2
      },
      {
        label: '# of Votes',
        data: views,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

