var text = ["STUDENT", " CODER;","DEBATER"," LEADER","ATHLETE"];
    var counter = 0;
    var elem = document.getElementById("changeText");
    setInterval(change, 1500);
    function change() {
      elem.innerHTML = text[counter];
      counter++;
      if (counter >= text.length) {
        counter = 0;
  }
}
var countDownDate = new Date("April 29, 2021 00:00:00").getTime();
var countdownfunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("countdown").innerHTML = days + " days and " + hours + " hours left."
}, 1000);
