// create audio object/variable
var audio = new Audio('http://kbit.xyz/lma/demo/sound/demo.mp3');

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 0, 255 / 2);
  audio.loop = false; // set loop audio to OFF
  textSize(32);
  text('press 1 = Play from start', 10, 30);
  text('press 2 = Resume play', 10, 30 * 2);
  text('press 3 = Pause', 10, 30 * 3);
  text('press 4 = Stop', 10, 30 * 4);
  text('press 5 = On/Off loop', 10, 30 * 5);
  text('press 6 = Audio length', 10, 30 * 6);
  text('press 7 = Random', 10, 30 * 7);
}


// audio controls
function keyTyped() {

  // play from start
  if (key === '1') {
    audio.currentTime = 0; // sets audio start time to to 0=start
    audio.play(); // play audio
    print("Play");
  }

  // play from paused position
  if (key === '2') {
    audio.play(); // play audio
    print("Resume play");
  }

  //pause the audio
  if (key === '3') {
    audio.pause(); // pause audio
    print("Pause");
  }

  //stops the sound 
  if (key === '4') {
    audio.pause(); // pause audio
    audio.currentTime = 0; // sets audio start time to 0=start
    print("Stop");
  }

  //Toggle on/off audio loop
  if (key === '5') {
    if (audio.loop == true) {
      audio.loop = false; // set loop to false
      print("Audio is looping");
    } else {
      audio.loop = true; // set loop to true
      print("Audio is not looping");
    }
  }

  //get audio length 
  if (key === '6') {
    print(audio.duration); // prints audio length
  }

  //random 
  if (key === '7') {
    audio.currentTime = random(0, audio.duration);  // set audio play time to random position
    audio.play();
    print("Random play");
  }
}