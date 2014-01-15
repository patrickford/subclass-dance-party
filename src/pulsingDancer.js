var PulsingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.sizeChange();
};

PulsingDancer.prototype = Object.create(Dancer.prototype);

PulsingDancer.prototype.sizeChange = function(){
  var randomInterval = Math.floor(Math.random()*2000);
  var randomMinSize = Math.floor(Math.random()*15)+5;
  var randomMaxSize = Math.floor(Math.random()*randomMinSize)+20;
  var randomBorderSize = {
      'border-radius' : randomMinSize,
      'border' : randomMinSize
  };
  var borderGrow = function(){
    for(var i = 0;  i <= (randomMaxSize - randomMinSize); i++){
      randomMinSize++;
      randomBorderSize['border-radius'] = randomMinSize + 'px;';
      randomBorderSize.border = randomMinSize + 'px;';
      this.$node.css(randomBorderSize);
      console.log(randomMaxSize, randomMinSize, randomInterval, i);
    }
  };
  setInterval(borderGrow.bind(this), randomInterval);
};