var PeanutButterJellyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="pbj">');
  console.log(this.$node, this, top, left, timeBetweenSteps);
  this.step();
};

PeanutButterJellyDancer.prototype = Object.create(Dancer.prototype);
PeanutButterJellyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
};