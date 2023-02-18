(function () {
   var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
   for (let key in names) {
      var firstLetter = names[key].charAt(0).toLowerCase();
       if (firstLetter === 'j') {
          byeSpeaker.speak(names[key]);
  } else {
    helloSpeaker.speak(names[key]);
  }
}

})();