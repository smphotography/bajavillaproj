var time = 2;

var interval = setInterval(function() {
  if (time <= 5) {
    var backgroundImageForManipulation = document.getElementById("bgimg");
    var bottomTextForManipulation = document.getElementById("bottomText");
    console.log("url('Club_Marena-" + time + ".jpg')");
    var dynamicPath = "url('photos/Club_Marena-" + time + ".jpg')";
    console.log("url('photos/Club_Marena-" + time + ".jpg')");
    backgroundImageForManipulation.style.backgroundImage = dynamicPath;
    var timeForSwitch = time;
    console.log(timeForSwitch);

    switch (timeForSwitch) {
      case 0:
        text = "Hello World";
        break;
      case 1:
        text = "This is the second";
        break;
      case 2:
        text = "This is the third";
        break;
      case 3:
        text = "This is the fourth";
        break;
      case 4:
        text = "This is the fifth";
        break;
      case 5:
        text = "This is the fifth";
        break;

      default:
        text = "No value found";
    }
    bottomTextForManipulation.innerHTML = text;
    time++;
  } else {
    clearInterval(interval);
  }
}, 5000);
