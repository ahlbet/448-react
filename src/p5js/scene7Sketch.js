export default function sketch(p) {

    var canvasWidth = 400;
    var canvasHeight = 400;
    var textSz = 16;
    // var timing = 150;
    // var speed = 200.0;

    var rot = 0.49;

    p.setup = function () {
      p.createCanvas(canvasWidth, canvasHeight);
      // font = p.loadFont('../fonts/Raleway/Raleway-Regular.ttf');

      p.noStroke();
      p.textFont('Verdana');
      p.textAlign(p.CENTER, p.CENTER);

    };

    p.draw = function () {
      p.background(0);

      p.fill(255);
      p.text('in the cold black pond of myself', p.width/2 + 100, p.height - textSz/2);

      p.text('I will drown in dysphoria', 78, textSz/2);

      p.translate(p.width/2, p.height/2);
      p.rotate((p.PI/3.0)*rot);
      p.text('the pit of my immaterial mind', 0, 0);

      if (rot > 0.5) {
        rot = rot * -1;
      }

      rot += 0.03;

    };
  }