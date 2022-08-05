function shout(string) {
    return string.toUpperCase();
  }
  
function whisper(string){
    return string.toLowerCase();
  }

function logShout(string) {
    string = string.toUpperCase()
    console.log(string)
}

function logWhisper(string) {
  string = string.toLowerCase()
  console.log(string)
}

function sayHiToHeadphonedRoommate (aWord) {
  var cantUnswer = "I can't hear you!";
  var yesUnswer = "YES INDEED!";
  var lovUnswer = "I would love to!";
  if (aWord.toLowerCase(aWord) === aWord) {
    return cantUnswer;
  }
  else if (aWord.toUpperCase(aWord) === aWord) {
    return yesUnswer;
  }
  else if ("Let's have dinner together!"== aWord) {
    return lovUnswer
  }
}