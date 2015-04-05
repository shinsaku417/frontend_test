// animation functionalities
var fadeIn = function(elem, time, callback) {
  var opac = 0;
  // increase opacity every x ms
  var interval = setInterval(function() {
    if (opac < 1) {
      opac += 0.05;
      elem.style.opacity = opac;
    } else {
      // when finished, clear interval and call callback function if there is one
      clearInterval(interval);
      if (callback) {
        callback();
      }
    }
  }, time);
};

var fadeOut = function(elem, time, callback) {
  var opac = 1;
  // decrease opacity every x ms
  var interval = setInterval(function() {
    if (opac > 0) {
      opac -= 0.05;
      elem.style.opacity = opac;
    } else {
      // when finished, clear interval and call callback function if there is one
      clearInterval(interval);
      if (callback) {
        callback();
      }
    }
  }, time);
};
