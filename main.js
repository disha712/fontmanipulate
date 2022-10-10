difference=0;
leftWristx=0;
rightWristx=0;
function setup(){
   video=createCapture(VIDEO);
   video.size(550,500);
   canvas=createCanvas(550,550);
   canvas.position(560,90);
   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristx=results[0].pose.leftWrist.x;
        rightWristx=results[0].pose.rightWrist.x;
        difference=floor(leftWristx - rightWristx);
    }
    }
function draw(){
    background("#ff0000");
    textSize(difference);
    fill('#0513fa');
    text("Disha",50,400);
}
function modelLoaded(){
    console.log('PoseNet is initialized!');
}