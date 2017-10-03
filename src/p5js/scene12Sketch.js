export default function sketch(p) {

    var canvasWidth = 400;
    var canvasHeight = 400;
    var textSz = 36;

    var timing = 40;

    var silence = '(A long silence.)';
    var txt = [
      `Okay,`, `let's`, `do`, `it,`, `let's`, `do`, `the`, `drugs,`, `let's`, `do`, `the`, `chemical`, `lobotomy,`, `let's`, `shut`, `down`, `the`, `higher`, `functions`, `of`, `my`, `brain`, `and`, `perhaps`, `I'll`, `be`, `a`, `bit`, `more`, `fucking`, `capable`, `of`, `living.`  
    ];

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

      var tt = p.frameCount;
      var t = p.frameCount % ( timing * (txt.length+1) );

      if (tt > 0 && tt < timing) {
        p.text(silence, p.width/2, p.height/2);
      }

      for (var i = 0; i <= txt.length; i++) {
        if (t > (timing * i) + timing && t < (timing * i) + (2 * timing)) {
          p.text(txt[i], p.width/2, p.height/2);
        }
      }

    };
  }