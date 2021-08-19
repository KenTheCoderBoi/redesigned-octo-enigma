var dog = ""
var objects = []
var status = ""
function preload(){
    dog = loadImage("hi.jpg")
}
function setup(){
    canvas = createCanvas(500,400)
    canvas.center()

    document.getElementById("status").innerHTML = "status:waiting"
    objectdetector = ml5.objectDetector("cocossd",modelLoaded)
}
function modelLoaded(){
    console.log("modelloaded")
    status = true
    objectdetector.detect(dog,gotresults)
}
function gotresults(error,results){
    if(error){
        console.log("oh no")
    }
    console.log(results)
    objects = results
}

function draw(){
    image(dog,0,0,500,400)
    if(status != ""){
        for(i=0 ;i < objects.length; i++){

    fill("red")
    text(objects[i].label,objects[i].x,objects[i].y)
    noFill()
    stroke("red")
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
    }}


}