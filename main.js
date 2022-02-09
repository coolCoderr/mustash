noseX = 0;
noseY = 0;

function preload(){
uslessnameforicon = loadImage("https://i.postimg.cc/SNmv3MSY/m.png");
}
function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(500, 200);
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);


}
function draw(){
    image(video, 0, 0, 400, 400);
    image(uslessnameforicon, noseX, noseY, 40, 30);
}
function modelLoaded(){
    console.log('Pose Net is initialised')
}
function take_snapshot(){
    save("minecraftstuff.png");
}

function gotPoses(results){
if (results.length>0){
console.log(results);
console.log("nose x =" + results[0].pose.nose.x);
console.log("nose y =" + results[0].pose.nose.y);

noseX = results[0].pose.nose.x - 20;
noseY = results[0].pose.nose.y + 5;
}
}