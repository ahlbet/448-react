export default function sketch(p) {

    var canvasWidth = 600;
    var canvasHeight = 400;
    var textSz = 12;

    var timing = 5;
    var timing2 = 30;

    var symptoms = 'Not eating, not sleeping, not speaking, no sex drive, in despair, wants to die.';
    var diagnosis = 'Pathological grief.';
    var drugs = [
      '- Sertraline', '- Zopiclone', '- Melleril', '- Lofepramine', '- Citalopram', '- Prozac', '- Thorazine', '- Venlafaxine'
    ];

    var od1 = '100 aspirin and one bottle of Bulgarian Cabernet Sauvignon, 1986. Patient woke in a pool of vomit'; 

    var od2 = 'and said \'Sleep with a dog and rise full of fleas.\' Severe stomach pain. No other reaction.'

    p.setup = function () {
      p.createCanvas(canvasWidth, canvasHeight);
      // font = p.loadFont('../fonts/Raleway/Raleway-Regular.ttf');

      p.noStroke();
      p.textFont('Verdana');
      p.textAlign(p.LEFT, p.TOP);
      p.textSize(textSz);

      p.background(247, 248, 250);

    };

    p.draw = function () {

      var symptomsSplit = symptoms.split('');
      // console.log(symptomsSplit.length);
      var diagnosisSplit = diagnosis.split('');
      var od1Split = od1.split('');
      var od2Split = od2.split('');

      p.fill(0);
      p.text('Symptoms: ', textSz, 2*textSz);

      // var t = p.frameCount % (timing * (symptomsSplit.length + diagnosisSplit.length) );
      var t = p.frameCount;

      for (var i = 0; i < symptomsSplit.length; i++) {
        if (t > timing * i && t < (timing * i) + timing) {
          p.text(symptomsSplit[i], 80 + i*6, 2*textSz);
        }
      }

      p.text('Diagnosis: ', textSz, 4*textSz);

      for (var j = 0; j < diagnosisSplit.length; j++) {
        if (t > (timing * j) + (timing * symptomsSplit.length) && t < (timing * j) + (timing * symptomsSplit.length) + timing) {
          p.text(diagnosisSplit[j], 80 + j*6, 4*textSz);
        }
      }

      if (t >= (timing * (symptomsSplit.length + diagnosisSplit.length) ) - 10) {
        var tt = p.frameCount % (timing2 * drugs.length);
        for (var k = 0; k < drugs.length; k++) {
          if (tt > timing2 * k && tt < (timing2 * k) + timing2) {
            p.text(drugs[k], textSz, (8*textSz) + (k * textSz));  
          }
        }
        
      }

      if ( t >= (timing * (symptomsSplit.length + diagnosisSplit.length) ) + (timing2 * drugs.length)) {
        
        var ttt = p.frameCount % (timing * od1Split.length); 
        for (var l = 0; l < od1Split.length; l++) {
          if (ttt > timing * l && ttt < (timing * l) + timing) {
            p.text(od1Split[l], l*6, p.height/2);
          }
        }
        for (var m = 0; m < od2Split.length; m++) {
          // var tttt = p.frameCount % (timing * od2Split.length);
          if (ttt > timing * m && ttt < (timing * m) + timing) {
            p.text(od2Split[m], m*6, p.height/2 + textSz * 2);
          }
        }
      }

    };

  }