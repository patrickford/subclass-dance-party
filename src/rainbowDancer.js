var RainbowDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.colorize();
};

RainbowDancer.prototype = Object.create(Dancer.prototype);

RainbowDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
};

RainbowDancer.prototype.colorize = function(){
  var color = ['red', 'yellow', 'blue', 'green', 'orange', 'purple', 'white'];
  var randomColor = color[Math.floor(Math.random() * color.length)];
  var randomBorderColor = {
    'border-color' : randomColor
  };
  this.$node.css(randomBorderColor);
};
