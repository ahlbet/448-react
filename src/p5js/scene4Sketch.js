export default function sketch(p) {

    var canvasHeight = 400;
    var canvasWidth = 400;
    var textSz = 16;
    var timing = 200;
    var speed = 200.0;

    var nums = [
      100, 91, 84, 81, 72, 69, 58, 44, 42, 38, 37, 28, 21, 12, 7
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

      p.text('DR THIS: Start at 100 and keep subtracting 7.', p.width/2, textSz);

      var t = p.frameCount / speed;
      var tt = (p.frameCount / speed) % 100.0;
      var ttt = p.frameCount % (nums.length * timing);

      var movX = p.noise( 1, t, tt );
      var movY = p.noise( 2, tt, t );

      for (var i = 0; i < nums.length; i++) {
        if (ttt > timing * i && ttt < (timing * i) + timing) {
          p.text(nums[i], movX * p.width, movY * p.height);  
        }
      }
      
    };
  }