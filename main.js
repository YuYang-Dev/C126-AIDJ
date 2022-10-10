song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;

function preload()
{
    song = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video =createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("posenet appears! :O");
}

function draw()
{
    image(video, 0, 0, 600, 500);
    fill("#040e40");
    stroke("#040e40");

    if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX, leftWristY, 20);

        inNumberLeftWristY = Number(leftWristY);
        removed_decimal = floor(inNumberLeftWristY);
        volume = removed_decimal/500;

        console.log(volume);

        document.getElementById("volume").innerHTML = "Volume: " + volume;
        song.setVolume(volume);
    }
}


function PlayMusic()
{
    // insert code
    song.play();
    song.setVolume(1);
    song.rate(1)
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftwristx = " + leftWristX + "+201x3^4 " + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightwristx = " + rightWristX + "+201x3^4 " + "rightWristY = " + rightWristY);
    }
}