function low(startX,startY,diam) {
  this.x = startX;
  this.y = startY;
  this.diameter = diam;
  this.history = [];
  
  this.update = function(diam) {
    this.x = startX;
    this.y = startY;
    this.diameter = diam1;

    var v = createVector(this.x, this.y);
    this.history.push(this.diameter);

    if (this.history.length > 50) {
      this.history.splice(0,2);
    }

  } 

  this.draw = function(){ 
    scribble.scribbleEllipse(this.x,this.y,this.diameter,this.diameter);
    }

  this.ripples = function() {
    for (var i = 0; i < this.history.length; i++) {
      ellipse(this.x,this.y,this.history[i],this.history[i]);
      
    }
  }
}


function mid(startX,startY,diam) {
  this.x = startX;
  this.y = startY;
  this.diameter = diam;
  this.history = [];
  
  this.update = function(diam) {
    this.x = startX;
    this.y = startY;
    this.diameter = diam2;

    var v = createVector(this.x, this.y);
    this.history.push(this.diameter);

    if (this.history.length > 22) {
      this.history.splice(0,2);
    }

  } 

  this.draw = function(){ 
    
    scribble.scribbleEllipse(this.x,this.y,this.diameter,this.diameter);
    }

  this.ripples = function() {
    for (var i = 0; i < this.history.length; i++) {
      ellipse(this.x,this.y,this.history[i],this.history[i]);
      
    }
  }
}

function high(startX,startY,diam) {
  this.x = startX;
  this.y = startY;
  this.diameter = diam;
  this.history = [];
  
  this.update = function(diam) {
    this.x = startX;
    this.y = startY;
    this.diameter = diam3;

    var v = createVector(this.x, this.y);
    this.history.push(this.diameter);

    if (this.history.length > 35) {
      this.history.splice(0,2);
    }

  } 

  this.draw = function(){ 
    
    scribble.scribbleEllipse(this.x,this.y,this.diameter,this.diameter);
    }

  this.ripples = function() {
    for (var i = 0; i < this.history.length; i++) {
      ellipse(this.x,this.y,this.history[i],this.history[i]);
      
    }
  }
}


