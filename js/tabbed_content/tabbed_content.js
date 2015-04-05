// select both tab and content elements with given id
var select = function(id) {
  var selectedTab = document.querySelector('[data-tab=tab-' + id + ']');
  var selectedContent = document.querySelector('[data-content=content-' + id + ']');
  selectedTab.className = 'tab selected';
  selectedContent.className = 'content selected';
};

// deselect currently selected elements by removing selected class
// removing selected class will modify elems (due to JS objects being passed by reference)
// so eventually elems.length will become 0 after removing 'selected' class from
// tab and content
var deselect = function(elems) {
  while (elems.length) {
    var elem = elems[0];
    elem.className = elem.className.replace(/selected/, '');
  }
};

// function that will get attached to each tabs
// deselects current tab and selects selected tab
var selectTab = function() {
  var current = document.getElementsByClassName('selected');
  // only select when it is different from currently selected tab
  if (current[0].getAttribute('data-tab') !== this.getAttribute('data-tab')) {
    deselect(current);

    var id = this.getAttribute('data-tab').split('-')[1];
    select(id);
  }
};

var init = function() {
  // add onclick events to the tabs
  var tabs = document.getElementsByClassName('tab');
  for (var i = 0; i < tabs.length; i++) {
    var tab = tabs[i]
    tab.onclick = selectTab;
  }
};

init();
