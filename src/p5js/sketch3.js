// import P5Wrapper from 'react-p5-wrapper';


export default function sketch(p) {
    var textLetters = ['D','Y', 'L','A','N','S','T','R','A','T','T','O','N'];
    var yOff = 0.0;
    // var font;
    var canvasHeight = 200;
    var canvasWidth = 300;

    p.setup = function () {
      p.createCanvas(canvasWidth, canvasHeight);
      // font = p.loadFont('../fonts/Raleway/Raleway-Regular.ttf');
    };

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      // if (props.rotation){
      //   rotation = props.rotation * Math.PI / 180;
      // }
    };

    p.draw = function () {
      p.background(247, 248, 250);
      yOff = yOff + 0.005;
      p.fill(90, 97, 109);

      // p.textFont(font);
      p.textFont('Verdana');
      p.textSize(canvasWidth / 10);
      p.textAlign(p.CENTER, p.CENTER);
      var arrLength = textLetters.length;
      var gen = canvasWidth / arrLength;

      for (var i = 0; i < arrLength; i++) {
        var n = p.noise(3, i, yOff) * p.height;
        p.text(textLetters[i], i*(gen)+(gen / 2), n);
      }
    };
  }