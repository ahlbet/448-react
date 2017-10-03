export default function sketch(p) {

    var canvasWidth = 400;
    var canvasHeight = 400;
    var textSz = 16;
    var timing = 150;
    var speed = 200.0;
    // var font;

    var answer = ['1. Take an overdose', '2. slash my wrists', '3. hang myself'];
    var nums = [3, 2, 1];

    p.setup = function () {
      p.createCanvas(canvasWidth, canvasHeight);
      // font = p.loadFont('./Raleway-Regular.ttf');
      // p.textFont(font);
      p.noStroke();
      p.textFont('Verdana');
      p.textAlign(p.CENTER, p.CENTER);

    };

    p.draw = function () {
      p.background(247, 248, 250);

      p.textSize(textSz);

      var t = p.frameCount / speed;
      var tt = (p.frameCount / speed) % 100.0;
      var ttt = p.frameCount;

      var movX = p.noise( 1, t, tt );
      var movY = p.noise( 2, tt, t );

      if (ttt < answer.length * timing) {
        for (var i = 0; i < answer.length; i++) {
          if (ttt > timing * i && ttt < timing + (timing * i)) {
            p.textSize(textSz);
            p.text('- Have you made any plans?', p.width/2, textSz);
            p.text(answer[i], movX * p.width, movY * p.height);
            p.textSize(72);
            p.text(nums[i], p.width/2, p.height/2);  
          }
        }
      } else if (ttt > answer.length * timing && ttt < 2 * answer.length * timing) {
        p.textSize(textSz);
        p.text('I just hope to God that death is the fucking end.', p.width/2, p.height/2);
      }
    };
  }