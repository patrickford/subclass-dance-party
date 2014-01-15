// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer">');
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  window.dancers.push(this);
  this.hover();
  this.explode(this);
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  /* Use css top and left properties to position our <span> tag
   * where it belongs on the page. See http://api.jquery.com/css/
   */
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
  $('.dancer').effect("bounce");
  // $(obj).click(function(){
  //   $(obj).effect("explode");
  //   console.log(obj);
  });
};
// Dancer.prototype.explode = function(){
//   this.$node.on('click', function(){
//     $(this).closest('.dancer').toggle("bounce");
//   });
// };