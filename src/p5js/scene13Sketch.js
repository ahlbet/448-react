export default function sketch(p) {

    var canvasWidth = 400;
    var canvasHeight = 400;
    var textSz = 12;

    var numCells = 200;
    var cells = []; 

    p.setup = function () {
      p.createCanvas(canvasWidth, canvasHeight);
      // font = p.loadFont('../fonts/Raleway/Raleway-Regular.ttf');

      p.noStroke();
      p.textFont('Verdana');
      p.textAlign(p.CENTER, p.CENTER);
      p.textSize(textSz);

      for (var i = 0; i < numCells; i++) {
        cells.push(new Cell());
      }

    };

    p.draw = function () {
      p.background(247, 248, 250);

      for (var i = 0; i < cells.length; i++) {
        cells[i].shrink();
        cells[i].show();
      }

      p.fill(0);
      p.text('still ill', p.width/2, p.height/2);

    };

    var Cell = function(x, y, r, c) {
      this.x = p.random(p.width);
      this.y = p.random(p.height);

      this.r = p.random(100, 400);
      this.c = c || p.color(0);

      this.shrink = function() {

        if (this.r > 0) {
          this.r -= 1;
        }

      }

      this.show = function() {
        p.noStroke;
        p.fill(this.c);
        p.ellipse(this.x, this.y, this.r, this.r);
      }
    }

  }