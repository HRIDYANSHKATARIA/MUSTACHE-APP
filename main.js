noseX = 0;
noseY = 0;

function preload()
{
    Clown_nose = loadImage('https://i.postimg.cc/28yKFB3b/clown-nose.jpg');
}

function setup()
{
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video,modelloaded);
poseNet.on = ('pose',gotposes);
}

function draw()
{
    image(video,0,0,300,300);
   image(Clown_nose,noseX,noseY,30,30);
}

function take_snapshot(){
    save('Myfilterimage.png');
}

function modelloaded(){
console.log('poseNet is intialized');
}

function gotposes(results){
    if(results.length > 0)
    {
    console.log(results);  
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("NOSE X = "+noseX);
    console.log("NOSE Y = "+noseY);
 } }
