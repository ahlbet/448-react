export default function sketch(p) {

    var canvasWidth = 400;
    var canvasHeight = 400;
    var textSz = 14;

    var timing = 300;
    // var speed = 200.0;

    var hidden = [
      'I dread the loss of her I\'ve never touched', 'love keeps me a slave in a cage of tears', 'I gnaw my tongue with which to her I can never speak', 'I miss a woman who was never born', 'I kiss a woman across the years that say we shall never meet', 'Everything passes', 'Everything perishes', 'Everything palls', 'my thought walks away with a killing smile', 'leaving discordant anxiety', 'which roars in my soul', 'A song for my loved one, touching her absence', 'the flux of her heart, the splash of her smile', 'In ten years time she\'ll be dead. When I\'m living with', 'it, dealing with it, when a few days pass when I don\'t even', 'think of it, she\'ll still be dead. When I\'m an old lady living', 'on the street forgetting my name she\'ll still be dead, she\'ll', 'still be dead, it\'s just fucking over and I must stand alone', '', ''
    ];

    var txt = 'no hope';
    // var x = 60;
    var numX = 62;
    // var numY = p.height / textSz;
    var numY = 20;
    var rows = 20;
    var rowHeight = 20;
    var hiddenSz = 12;

    p.setup = function () {
      p.createCanvas(canvasWidth, canvasHeight);
      // font = p.loadFont('../fonts/Raleway/Raleway-Regular.ttf');

      p.noStroke();
      p.textFont('Verdana');
      p.textAlign(p.CENTER, p.CENTER);
      p.textSize(textSz);

      p.background(247, 248, 250);

      for (var i = 0; i < numX; i++) {
        for (var j = 0; j < numY; j++) {
          p.text(txt, i*numX + numX/2, j*numY + textSz);
        }
      }

    };

    p.draw = function () {

      for (var i = 0; i < rows; i++) {
        if (p.mouseY > rowHeight * i && p.mouseY < (rowHeight * i) + rowHeight && p.mouseX > 0 && p.mouseX < p.width) {
          p.fill(0);
          p.rect(0, (rowHeight * i), p.width, rowHeight + 1);

          p.fill(255);
          p.textSize(hiddenSz);
          p.text(hidden[i], p.width/2, (rowHeight * i) + textSz);
        }
      }
    };
  }