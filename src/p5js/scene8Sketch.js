export default function sketch(p) {

    var canvasWidth = 400;
    var canvasHeight = 400;
    var textSz = 72;

    p.setup = function () {
      p.createCanvas(canvasWidth, canvasHeight);
      // font = p.loadFont('../fonts/Raleway/Raleway-Regular.ttf');

      p.noStroke();
      p.textFont('Verdana');
      p.textAlign(p.CENTER, p.CENTER);

    };

    p.draw = function () {

      p.background(247, 248, 250);

      var movX = p.random(-2, 2);
      var movY = p.random(-2, 2);
      
      p.textSize(textSz);
      p.text('RSVP', p.width/2 + movX, p.height/2 + movY - 20);
      p.text('ASAP', p.width/2 + movX, p.height/2 + movY);

    };
  }