// an object that contains words in the text along with counts
var dict = {};
var search_text = document.getElementById('search_text');

var countWords = function(elem) {
  // get childNodes of an element
  var childNodes = elem.childNodes;
  // if there is no childNodes, add words to the dict
  if (childNodes.length === 0) {
    var words = elem.textContent.split(' ');
    for (var i = 0; i < words.length; i++) {
      // remove special characters from the word
      // it is case-sensitive (search for 'Turtle' will yield different result compared to search for 'turtle')
      var word = words[i].replace(/\s|\.|\,|\(|\)|\[|\]|\"/g, "");
      // check if the word consists of any letters
      if (word.length > 0) {
        // on the first appearance, count is 1
        // else, count is existing count + 1
        if (!dict[word]) {
          dict[word] = 1;
        } else {
          dict[word] = dict[word] + 1;
        }
      }
    }
  } else {
    // make recursive call with each of childNodes
    for (var i = 0; i < childNodes.length; i++) {
      var child = childNodes[i];
      countWords(child);
    }
  }
};

var countPhrases = function() {
  // phrases are in tagname <a> e.g. 'leatherback sea turtles'
  // this won't work for cartilaginous shell since those two words
  // are in thir own <a> (since 'bony' also describes shell)
  var phrases = search_text.getElementsByTagName('a');
  for (var i = 0; i < phrases.length; i++) {
    var phrase = phrases[i].text;
    // phrases have more than 1 words
    if (phrase.split(' ').length > 1) {
      if (!dict[phrase]) {
        dict[phrase] = 1;
      } else {
        dict[phrase] = dict[phrase] + 1;
      }
    }
  }
};
// call countWords and countPhrases to register words into dict
countWords(document.getElementById('search_text'));
countPhrases();
console.log(dict);

// create and add submit event to the form
var search = function(e) {
  // prevent refreshing of the page after submission
  e.preventDefault();
  var input = document.getElementById('search_input').value;
  var count = dict[input] || 0;
  var result = 'Found ' + count + ' occurances of the word "' + input + '" in the below text.';
  document.getElementById('result').innerHTML = result;
};
var form = document.getElementById('search');
form.addEventListener('submit', search);
