export default function sketch(p) {

    var canvasWidth = 400;
    var canvasHeight = 400;
    var textSz = 12;

    var num = 6;

    p.setup = function () {
      p.createCanvas(canvasWidth, canvasHeight);
      // font = p.loadFont('../fonts/Raleway/Raleway-Regular.ttf');

      p.noStroke();
      p.textFont('Verdana');
      p.textAlign(p.CENTER, p.CENTER);
      p.textSize(textSz);


    };

    p.draw = function () {

      p.background(247, 248, 250);

      for (var i = 0; i < num; i++) {
        p.stroke(0);
        p.line((i*60) + 10, p.height/2, (i*60) + 60, p.height/2);
      }

      p.text('CUT HERE', p.width/2, p.height/2 - textSz);

    };

  }