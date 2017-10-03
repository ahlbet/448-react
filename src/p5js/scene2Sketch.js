export default function sketch(p) {

    var canvasHeight = 400;
    var canvasWidth = 400;

    var cells = [];
    var textSz = 16;
    var start = 10;

    p.setup = function () {
      p.createCanvas(canvasWidth, canvasHeight);
      // font = p.loadFont('../fonts/Raleway/Raleway-Regular.ttf');

      p.noStroke();
      p.textFont('Verdana');
      p.textAlign(p.CENTER);
      p.textSize(textSz);

      for (var i = 0; i < start; i++) {
        cells.push(new Cell());
      }
      
    };

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      // if (props.rotation){
      //   rotation = props.rotation * Math.PI / 180;
      // }
    };

    p.draw = function () {
      p.background(247, 248, 250);

      for (var i = 0; i < cells.length; i++) {
        cells[i].move();
        cells[i].show();
      }
    };

    p.mousePressed = function() {
      for (var i = cells.length - 1; i >= 0; i--) {
        if (cells[i].clicked(p.mouseX, p.mouseY)) {
          var cellA = cells[i].mitosis();
          var cellB = cells[i].mitosis();
          
          cells.push(cellA);
          cells.push(cellB);
          
          cells.splice(i, 1);
        }
      }
    }

    var Cell = function(pos, r, c) {
      if (pos) {
        this.pos = pos.copy();
      } else {
        this.pos = p.createVector(p.random(p.width), p.random(p.height));
        // this.pos = p.createVector(p.width/2, p.height/2);
      }

      this.r = r || 400;
      this.c = c || p.color(0);

      this.clicked = function(x, y) {
        var d = p.dist(this.pos.x, this.pos.y, x, y);
        if (d < this.r / 2) {
          return true; 
        } else {
          return false;
        }
      }

      this.mitosis = function() {
        var offset = p.random(-10, 10);
        var newpos = p.createVector(this.pos.x + offset, this.pos.y + offset);
        var cell = new Cell(newpos, this.r/2, this.c);
        return cell;
      }

      this.move = function() {
        var vel = p.random(-1, 1);
        this.pos.add(vel);
      }

      this.show = function() {
        p.noStroke();
        p.fill(this.c);
        p.ellipse(this.pos.x, this.pos.y, this.r, this.r);
      }
    }

  }
