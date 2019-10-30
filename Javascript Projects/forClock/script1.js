var noon = 12;
var meridian = "AM";
var afternoon = 18;
var morning = 6;
var lunchtime = 12

var showCurrentTime = function() {

var clock = document.getElementById("clock");
var currentTime = new Date();


let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();


if (hours >= noon){
    meridian = "PM";
}

if (hours > noon){
    hours = hours - 12;
}

if (seconds < 10){
    seconds = "0" + seconds;
}



var clockTime = hours + ":" + minutes + ":" + seconds + meridian;

clock.innerText = clockTime;
};



var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  var timeEventJS = document.getElementById("message");
  var lolcatImageJS = document.getElementById('cats');
  
  if (time == morning && meridian == "AM")
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Wake up!";
  }
  else if (time < noon && meridian == "AM")
  {
    image = "forClock/catmorning.jpg";
    messageText = "Good morning!";
  }
  else if (time == lunchtime){
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon! it's lunch time!";
  }
  else if (time < afternoon)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
  }
  else
  {
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "Good evening!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImageJS.src = image;
  
  showCurrentTime();
};
updateClock();

var oneSecond = 1000;
setInterval( updateClock, oneSecond);
// Neet to put another function here to modify the image based on the time value

/*
if (hours >= 6 && meridian == "PM"){
    catss = document.getElementById("cats").src = "forClock/catsleep.jpg"
    messages = document.getElementById("message").innerHTML = "Good Evening"
}
*/