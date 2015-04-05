// index variable to keep track of which image we are on
var index = 0;

var display = function() {
  var skins = document.getElementsByClassName('skin');
  // if index reaches out of bounds, rotate back to the first index
  if (index === skins.length) {
    index = 0;
  }

  var rotator = document.getElementById('rotator');
  // fadeout the rotator, with callback to fadein the image
  fadeOut(rotator, 50, function() {
    // clear rotator
    while (rotator.hasChildNodes()) {
      rotator.removeChild(rotator.childNodes[0]);
    }
    // clone node so we don't delete the original nodes in the code above
    var skin = skins[index].cloneNode(true);
    // append title, description, and img to the rotator
    var title = skin.children[0];
    var description = skin.children[1];
    var img = skin.children[2];
    rotator.appendChild(title);
    rotator.appendChild(description);
    rotator.appendChild(img);
    // fadeIn the rotator
    fadeIn(rotator, 50);
    // increment index
    index++;
  });
};

// initialize
display();

// set interval for 4 seconds taking in accounts of fading animations
setInterval(display, 4000);
