song="";
song1="";
scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload()
{
    song = loadSound("music.mp3");
   song1 = loadSound("music2.mp3");   
}
function setup() 
{
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet( video, modelLoaded);
    poseNet.on('pose',gotPoses)
}
function modelLoaded() {
    
    console.log (' PoseNet Is on ')
}
function draw(){

    image(video,0,0,600,500);
    fill("green");
    stroke("black");
    if (scoreLeftWrist >0.2)
    {
    circle(leftWristX,leftWristY,20);
    song1.stop();
    } 
      


if (scoreRightWrist >0.2)
    {
        circle(rightWristX,rightWristY,20);
        song.stop();
        } 
}
if (scoreRightWrist = true)
{ song1.play();
    song1.setVolume(1);
	song1.rate(1);
    
}
if (scoreLeftWrist = true)
{ song.play();
    song.setVolume(1);
	song.rate(1);
    
}
function gotPoses(results)
{

    if (results.length >0)
    {
        console.log (results);
        scoreRightWrist =  results[0].pose.keypoints[10].score;
        scoreLeftWrist =  results[0].pose.keypoints[9].score;
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.lefttWrist.y;
       rightWristX= results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        
    

        

    }
}
