function preload()  {
    mustacheX=0;
    mustacheY=0;

    function preload(){
        clown_nose = loadImage("mustacheX=0")
    }


}

function setup() {
    canvas = createCanvas(301,301);
    canvas.center();
}

function draw() {
}

function take_snapshot(){
    save('myFilterImage.png');
}

function setup() {
    canvas = createCanvas(301, 301);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(301, 301)
    video.hide();
    PoseNet =  ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results)
{
    if(results.length >0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}
function modelloaded(){
    console.log('PoseNet Is Initialized');
}

function draw() {
    Image(video, 0, 0, 301, 301);
}

function take_snapshot(){
    save('myFilterImage.png');
}