export default function sketch(p) {

    var canvasHeight = 400;
    var canvasWidth = 400;
    var textSz = 16;

    var timing = 150;
    var textOffset = textSz * 2;

    var iAmText = [
      'sad', 'bored and dissatisfied with everything', 'a complete failure as a person', 'guilty, I am being punished', 'fat', 'charging towards my death', 'terrified of medication'
    ];

    var iCannotText = [
      'make decisions', 'eat', 'sleep', 'think', 'overcome my loneliness, my fear, my disugst', 'write', 'love', 'make love', 'fuck', 'be alone', 'be with others'
    ];

    p.setup = function () {
      p.createCanvas(canvasWidth, canvasHeight);
      // font = p.loadFont('../fonts/Raleway/Raleway-Regular.ttf');

      p.noStroke();
      p.textFont('Verdana');
      p.textAlign(p.CENTER);
      p.textSize(textSz);
      
    };

    p.draw = function () {
      p.background(247, 248, 250);

      p.text('I am', p.width / 2, (p.height / 3) - textOffset);
      p.text('I cannot', p.width / 2, (p.height * 2 / 3) - textOffset);

      var t = p.frameCount % (iAmText.length * timing);
      var tt = p.frameCount % (iCannotText.length * timing);
      var ttt = p.frameCount % (timing);

      for (var i = 0; i < iAmText.length; i++) {
        if (t  >  i * timing && t < (i * timing) + timing) {
          p.text(iAmText[i], p.width / 2, p.height / 3);
        }
      }

      for (var j = 0; j < iCannotText.length; j++) {
        if (tt > j * timing && tt < (j * timing) + timing) {
          p.text(iCannotText[j], p.width/2, p.height * 2 / 3);
        }
      }

      if (ttt > timing / 3 && ttt < timing * 2 / 3) {
        p.text('I do not want to die || I do not want to live', p.width / 2, (p.height / 2) - textSz);
      }

    };
  }