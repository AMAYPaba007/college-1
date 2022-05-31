var SpeechRecognition= window.webkitSpeechRecognition;

var recognition= new SpeechRecognition();

function start(){
    document.getElementById("textBox").innerHTML= "";
 recognition.start();
}

recognition.onresult= function(event) {
 console.log(event);
 var Content= event.results[0][0].transcript;
 console.log(Content);
 
 document.getElementById("textBox").innerHTML= Content;
 console.log(Content);

 if (Content == "take my selfie"){
     console.log("take my selfie ---")
     Speak();
 }
}

function Speak(){
var synth= window.SpeechSynthesis;
speak_data= "Taking your selfie in 5 seconds";
var UtterThis= new SpeechSynthesisUtterance(speak_data);
synth.speak(UtterThis);
Webcam.attach(camera);

setTimeout(function() {
    take_snapshot();
    save();
}, 5000);
}


Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
png_quality:90
});
camera= document.getElementById("camera");

function take_snapshot(){

    Webcam.snap(function(data_uri){
        document.getElementById("result").innnerHtml= '<img id="selfie_img" src="'+data_uri+'">';
});
}

function save(){
 link= document.getElementsById("link");
 image= document.getElementById("selfie_image").src;
 link.href= image;
 link.click();
}