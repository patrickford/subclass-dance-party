// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer">');
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  window.dancers.push(this);
  this.hover();
  this.explode();
};

Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.hover = function(){
  var colors = ['red', 'blue', 'purple', 'orange', 'green', 'yellow', 'white'];
  this.$node.mouseover(function(){
    $('.dancer').css({'border-color' : 'red' });
  }).mouseout(function(){
    $('.dancer').css({'border-color' : colors[Math.floor(Math.random() * colors.length)]});
  });
};

Dancer.prototype.explode = function(){
  this.$node.click(function(){
    $('.dancer').effect("explode");
    window.dancers = [];
  });
};