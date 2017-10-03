export default function sketch(p) {

    var canvasWidth = 400;
    var canvasHeight = 400;
    var textSz = 16;

    // var stretch = 163;
    var stretch = 75;
    var stretchY = 20;

    var row = [['(Silence)', '(Silence)', '(Silence)'], ['(Silence)', '         ', '(Silence)'], ['(Silence)', '(Silence)', '(Silence)']];

    p.setup = function () {
      p.createCanvas(canvasWidth, canvasHeight);
      // font = p.loadFont('../fonts/Raleway/Raleway-Regular.ttf');

      p.noStroke();
      p.textFont('Verdana');
      p.textAlign(p.LEFT, p.TOP);

    };

    p.draw = function () {

      p.background(247, 248, 250);
      
      p.textSize(textSz);

      p.translate(100, 100);

      for (var i = 0; i < row.length; i++) {
        for (var j = 0; j < row[i].length; j++) {
          p.text(row[i][j], i * stretch, j * stretchY);
        }
      }

      p.textSize(p.mouseX / 13);
      p.text('Fuck you.', 75, 20);

    };
  }