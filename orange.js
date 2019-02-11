var express        =         require("express");
var bodyParser     =         require("body-parser");
var request 	   =  		 require("request");
var app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static('public'));

app.get('/',function(req,res){
  res.sendfile("index.html");
});

app.post('/orange',function(req,res){
	var cmdid=req.body.cmd;
	//console.log("cmd = "+cmdid);
	
	request("http://192.168.1.10:8080/remoteControl/cmd?operation=01&key=" + cmdid + "&mode=0", function(error, response, body) {
	   if (!error && response.statusCode == 200) {
	   }
	 });
	
	res.end("done");
});
app.listen(3000,function(){
  console.log("Started on PORT 3000");
})


	/*
	http://192.168.1.10:8080/remoteControl/cmd?operation=01&key=code_touche&mode=0

	numéro_mode :

	0 : envoi unique de touche
	1 : appui prolongé de touche
	2 : relacher la touche après un appui prolongé

	code_touche :

	116 : ON/OFF
	512 : 0
	513 : 1
	514 : 2
	515 : 3
	516 : 4
	517 : 5
	518 : 6
	519 : 7
	520 : 8
	521 : 9
	402 : CH+
	403 : CH-
	115 : VOL+
	114 : VOL-
	113 : MUTE
	103 : UP
	108 : DOWN
	105 : LEFT
	106 : RIGHT
	352 : OK
	158 : BACK
	139 : MENU
	164 : PLAY/PAUSE
	168 : FBWD
	159 : FFWD
	167 : REC
	393 : VOD
	*/