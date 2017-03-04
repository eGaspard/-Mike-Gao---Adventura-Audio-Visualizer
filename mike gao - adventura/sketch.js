var cnv;
var scribble;
var seed;
var f = 0;
speed = 0.01;



function preload() {
	song = loadSound("music/Mike Gao - Adventura 320kbps.mp3");
	button = loadImage("img/play.svg");
	
}



function setup() {
	cnv = createCanvas(window.innerWidth,window.innerHeight);
	cnv.parent(canvasTest);
	fft = new p5.FFT(0.9,1024);
	amp = new p5.Amplitude(0.99);
	
	other = new high(0,0);
	drum = new mid(0,0);
	bass = new low(0,0);

	scribble =  new Scribble();
	scribble.bowing = 5;          // changes the bowing of lines
	scribble.roughness = 0.1;       // changes the roughness of lines
	scribble.maxOffset = 2;       // coordinates will get an offset, here you define the max offset
	scribble.numEllipseSteps = 9; // defines how much curves will be used to draw an ellipse

}

	//---click on canvas play/stop-----------//
	function imgClicked() {
		if (song.isPlaying() ) {
	      song.pause();
			var img = document.getElementById('playImg');
	      img.style.visibility = 'visible';
		speed=0;
		noLoop();
		
																											   
	    } else {
	      song.play();
		  var img = document.getElementById('playImg');
	      img.style.visibility = 'hidden';
		speed=0.01;
		loop();
			
		}
		
		
	  }
function canvasClicked() {
		
		  song.stop();
		var img = document.getElementById('playImg');
	      img.style.visibility = 'visible';
		speed=0;
		noLoop();
	
	  }





function draw() {
	clear();
	
	

	
	c1 = color(255,0,0);
	c2 = color(0,255,255);
	c3 = color(255, 170, 0)

	fft.analyze();
	vol = amp.getLevel();


	//----get energy level from low,mid & high frequencies----//
	energy1 = fft.getEnergy(20,60);
	energy2 = fft.getEnergy(200,1000);
	energy3 = fft.getEnergy(10000,13000);

	//----map energy level to ellipse diameter----//
	diam1 = map(energy1, 0,255,0,800);
	diam2 = map(energy2, 0,255,0,900);
	diam3 = map(energy3, 0,255,0,1200);

	//----map amplitude to font & ellipse strokeweight----//
	fontreact = map(vol,0,1,0.1,2);
	ellipsereact = map(vol,0,1,0.3,1);

	//console.log("energy1 is "+ energy1,"energy2 is "+ energy2, "energy3 is "+ energy3);
	

	//----set text----//
	rectMode(CENTER);
	textFont("Teko");
	textSize(500);
	noFill(255);

	stroke(255);
	strokeWeight(fontreact);
	text("AD",width/2,height/4.2,textWidth("AD"),textSize());
	text("VEN",width/2,height/2.2,textWidth("VEN"),textSize());
	text("TURA",width/2,height/1.7,textWidth("TURA"),textSize());
	//---------------------------------------//
	rectMode(CORNER)
	textSize(25);
	fill(255);
	textFont("VT323");
	text("mIKE gAO",450,height-200);
	text("mIKE gAO",470,height-190);
	text("mIKE gAO",490,height-180);
	

	push();
	translate(width/2,height/2);
	f += speed;
	rotate(f);
	//-----red ellipse reacting to low frequency energy levels----//
	noFill(217, 0, 0,5);
	strokeWeight(10);   
	stroke(255, 0, 0);
	bass.update();
	bass.draw();
	strokeWeight(ellipsereact);  
	stroke(c1);
	bass.ripples();//__ripple effect
	//-----yellow ellipse reacting to mid  frequency energy levels----//
	noFill(255, 150, 0);
	strokeWeight(10);         
	stroke(255, 170, 0);
	drum.update();
	drum.draw();
	strokeWeight(ellipsereact);          
	stroke(c3);
	drum.ripples();//__ripple effect
	//-----blue ellipse reacting to high frequency energy levels----//
	noFill(255);
	strokeWeight(10);            
	stroke(0, 255, 255);
	other.update();
	other.draw();
	strokeWeight(ellipsereact)           
	stroke(c2);
	other.ripples();//__ripple effect
	pop();
	
}

