img="";
status="";
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd,modelLoaded');
    document.getElementById("status").innerHTML = "Status : Decting Objects"
}
function preload(){
    img = loadImage("istockphoto-502706233-612x612.jpg");
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("TV",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);
    fill("#FF0000");
    text("Phone",450,210);
    noFill();
    stroke("#FF0000");
    rect(450,200,200,200);
}
function modelLoaded(){
    console.log("MODEL LOADED!");
    status = true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,result){
if (error) {
    console.log(error);
}
console.log(results);
}