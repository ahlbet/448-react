export default function sketch(p) {

    var canvasWidth = 600;
    var canvasHeight = 400;
    var textSz = 14;

    var timing = 300;
    // var speed = 200.0;

    var one = [
      'Oh dear, what\'s happened to your arm?', 'That\'s a very immature, attention seeking thing to do. Did it give you relief?', 'Did it relieve the tension?', 'Did it give you relief?', 'Did it give you relief?', 'I don\'t understand why you did that.'
    ];

    var two = [
      'I cut it.', 'No.', 'No.', '  ', 'No.'
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

      var t = p.frameCount % (one.length * timing);
      // var tt = p.frameCount % (two.length * timing);

      p.fill(0);
      p.rect(0, 0, p.width, p.height/2);

      for (var i = 0; i < one.length; i++) {
        if (t > timing * i && t < timing/2 + (timing * i)) {
          p.fill(255);
          p.text(one[i], p.width/2, p.height/4);
        }
      }

      p.fill(255);
      p.rect(0, p.height/2, p.width, p.height/2);

      for (var j = 0; j < two.length; j++) {
        if (t > timing/2 + (timing * j) && t < (timing*j) + timing) {
          p.fill(0);
          p.text(two[j], p.width/2, (p.height*3)/4);
        }
      }

    };
  }