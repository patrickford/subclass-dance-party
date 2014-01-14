var bananaCounter = 0;

var PeanutButterJellyDancer = function(top, left, timeBetweenSteps){
  bananaCounter++;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('pbj');
  console.log(this.$node, this, top, left, timeBetweenSteps);
  this.step();
  // if(bananaCounter > 2){
  //   this.rotate({
  //   angle : 0, 
  //   animateTo : 360, 
  //   callback : rotation,
  //   easing : function (x,t,b,c,d){ 
  //       return c*(t/d)+b; }
  //  });
  // }
};

PeanutButterJellyDancer.prototype = Object.create(Dancer.prototype);
PeanutButterJellyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
};


PeanutButterJellyDancer.prototype.rotate = function(){
  
};