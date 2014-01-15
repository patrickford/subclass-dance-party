
var PeanutButterJellyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('pbj');
  this.step();
};

PeanutButterJellyDancer.prototype = Object.create(Dancer.prototype);
PeanutButterJellyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
};

PeanutButterJellyDancer.prototype.rotate = function(){
};
