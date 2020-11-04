// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/716JsmZJe/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";

// ALL STICKERS
let yes;
let yesFade = 0;

let no;
let noFade = 0;

let question;
let questionFade = 0;

let bye;
let byeFade = 0;

let soonBack;
let soonBackFade = 0;

let couldNotHear;
let couldNotHearFade = 0;

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  yes = loadImage('stickers/yes.png');
  no = loadImage('stickers/nooo.png');
  question = loadImage('stickers/question.png');
  bye = loadImage('stickers/bye.png');
  soonBack = loadImage('stickers/soonBack.png');
  couldNotHear = loadImage('stickers/couldNotHear.png');
}

function setup() {
  createCanvas(320*2, 240*2);
  // Create the video
  video = createCapture(VIDEO);
  video.size(320*2, 240*2);
  video.hide();

  // flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
}

function draw() {
  // background(0,255,0);
  // imageMode(CORNER);

  if (label == 'yes') {
    yesFade = 255;
  } else if (label == 'no') {
    noFade = 255;
  } else if (label == 'question') {
    questionFade = 255;
  } else if (label == 'bye') {
    byeFade = 255;
  } else if (label == 'soonBack') {
    soonBackFade = 255;
  } else if (label == 'couldNotHear') {
    couldNotHearFade = 255;
  }

  if (yesFade > 0) {
    tint(255, yesFade);
    image(yes, 0, 0);
    yesFade -= 10;
    console.log("yesFade " + yesFade);
  }

  if (noFade > 0) {
    tint(255, noFade);
    image(no, 0, 0);
    noFade -= 10;
    console.log("noFade" + noFade);
  }

  if (questionFade > 0) {
    tint(255, questionFade);
    image(question, 0, 0);
    questionFade -= 10;
    console.log("questionFade" + questionFade);
  }

  if (byeFade > 0) {
    tint(255, byeFade);
    image(bye, 0, 0);
    byeFade -= 10;
    console.log("byeFade" + byeFade);
  }

  if (soonBackFade > 0) {
    tint(255, soonBackFade);
    image(soonBack, 0, 0);
    soonBackFade -= 10;
    console.log("soonBackFade" + soonBackFade);
  }

  if (couldNotHearFade > 0) {
    tint(255, couldNotHearFade);
    image(couldNotHear, 0, 0);
    couldNotHearFade -= 10;
    console.log("couldNotHear" + couldNotHearFade);
  }

  // // Draw the video
  // image(flippedVideo, 0, 0);
  // // Draw the label
  // fill(255);
  // textSize(16);
  // textAlign(CENTER);
  // text(label, width / 2, height - 4);
  // tint(255, noFade);
  // noTint();
  image(video, 0, 0);
}

function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
  flippedVideo.remove();
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  results = results.filter(res => res.label !== "bye"); // remove bye for now
  // console.log(results);
  label = results[0].label;
  // Classifiy again!
  classifyVideo();
}
