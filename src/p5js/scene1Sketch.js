export default function sketch(p) {

    var canvasHeight = 400;
    var canvasWidth = 400;

    var textArr = ['(A very long silence)', '(A long silence)', '(A long silence)', '(A long silence)', '(Silence)', 'But you have friends.'];

    var textSz = 16;
    var c, rad;
    // var num = 3;
    var isMoving = false;

    p.setup = function () {
      p.createCanvas(canvasWidth, canvasHeight);
      // font = p.loadFont('../fonts/Raleway/Raleway-Regular.ttf');

      p.noStroke();
      p.textFont('Verdana');
      p.textAlign(p.CENTER);
      p.textSize(textSz);
    };

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      // if (props.rotation){
      //   rotation = props.rotation * Math.PI / 180;
      // }
    };

    p.draw = function () {
      p.background(247, 248, 250);

      var len = textArr.length;

      if (p.mouseX !== p.pmouseX || p.mouseY !== p.pmouseY) {
        isMoving = true;
      } else if (p.mouseX === p.pmouseX && p.mouseY === p.pmouseY) {
        isMoving = false;
      }

      if (isMoving === true) {
        c = 5;
        rad = 5;

      } else if (isMoving === false) {
        c = 0;
        rad = 0;
      }

      for (var i = 0; i < len - 1; i++) {
        var a = i * p.frameCount * 185.1;
        var r = p.sin(c * p.sqrt(p.frameCount / 100.0)) * rad;

        var x = r * p.cos(p.radians(a)) + p.width / 2;
        var y = r * p.sin(p.radians(a)) + textSz;

        p.fill(0);
        p.text(textArr[i], x, y + (textSz * i * 2));

        if (isMoving === true) {
          p.text(textArr[len - 1], x, y + (textSz * (len - 1) * 2));
        }

      }

    };
  }