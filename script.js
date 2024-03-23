var len = document.querySelectorAll(".myBUtton").length;

for (var i = 0; i < len; i++) {
  document.querySelectorAll(".myBUtton")[i].addEventListener("click", function () {
    var text = this.innerHTML;

    audioPlay(text)
  });
}



function audioPlay(text) {
    switch (text) {
        case "a":
          var audio = new Audio("sounds/s1.mpeg");
          audio.play();
          break;
        case "b":
          var audio = new Audio("sounds/s2.mpeg");
          audio.play();
          break;
        case "c":
          var audio = new Audio("sounds/s3.mpeg");
          audio.play();
          break;
      }
    
}