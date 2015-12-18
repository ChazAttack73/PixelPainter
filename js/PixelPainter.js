  // function PixelPainter ( name ){
  //   this._name = name;
  // }

  // function ColorSwatch ( height, width ){
  //   this._height = height;
  //   this._width = width;

  //   []

  //   this.swatch = new ColorBtn();


  // }

  // ColorSwatch.prototype = Object.create( PixelPainter.prototype );

  // function ColorBtn ( color ){
  //   this._color = color;

  //   var colors = []

  // }

  // ColorBtn.prototype = Object.create( ColorSwatch.prototype );

  //create function to show default color swatch

window.onload = function() {

  var newColor;
  var dragColor;
  var stroke = false;
  var undoArr = [];

  var main = document.getElementById( 'pixelPainter' );

  //div for color and button
  var leftScreen = document.createElement( 'div' );
    leftScreen.className = 'leftScreen';
    main.appendChild( leftScreen );

  var rightScreen = document.createElement( 'div' );
    rightScreen.className = 'rightScreen';
    main.appendChild( rightScreen );

  var colorGrid = document.createElement( 'div' );
    colorGrid.className = 'colorGrid';
    leftScreen.appendChild( colorGrid );

//Starter colors on left side
  for( var i = 1; i <= 1; i++ ){
    var starterColors = document.createElement( 'div' );
    starterColors.id = 'starterColors' + i;
    starterColors.className = 'starterColors';
    colorGrid.appendChild( starterColors );

  //color swatches
    for( var j = 1; j <= 10; j++ ){
      var colorBtn = document.createElement( 'div' );
      colorBtn.id = 'colorBtn' + j;
      colorBtn.className = 'colorBtn';
      starterColors.appendChild( colorBtn );

      colorBtn.addEventListener( 'click', function() {
        newColor = this.style.background;
        return newColor;
      });
    }
  }

  var pixelGrid = document.createElement( 'div' );
    pixelGrid.className = 'pixelGrid';
    rightScreen.appendChild( pixelGrid );

  for( var k = 1; k <= 50; k++ ){
    var canvasRow = document.createElement( 'div' );
    canvasRow.id = 'canvasRow';
    canvasRow.className = 'canvasRow' + k;
    pixelGrid.appendChild( canvasRow );

    for( var p = 1; p <= 50; p++ ){
      var canPixels = document.createElement( 'div' );
      canPixels.id = 'canPixels' + p;
      canPixels.className = 'canPixels';
      canvasRow.appendChild( canPixels );

      //when click current color will appear
      canPixels.addEventListener( 'click', function() {//<---------click fn

        undoArr.push( canPixels );
        this.style.background = newColor;
        dragColor = newColor;
        return dragColor;

        if( dragColor === this.style.background ){
          dragColor = !newColor;
          return dragColor;
        }

        //returns stroke to true while pushing canPixels to undoArr
        if( stroke === false ){
          stroke = true;
          console.log( undoArr );
          console.log( stroke );
          return stroke;
        } else {
          stroke = false;
          console.log( stroke );
          return stroke;
        }

      });

      //when dragged, will appear current color
      canPixels.addEventListener( 'mouseover', function() {
        this.style.background = dragColor;

        // while( stroke === true ){
        //   undoArr.push( canPixels );
        //   console.log( undoArr );
        // }

      });
    }
  }

  document.getElementById('colorBtn1').style.background = '#FF0000';
  document.getElementById('colorBtn2').style.background = '#F56905';
  document.getElementById('colorBtn3').style.background = '#F5E505';
  document.getElementById('colorBtn4').style.background = '#038C05';
  document.getElementById('colorBtn5').style.background = '#0034C2';
  document.getElementById('colorBtn6').style.background = '#6E00C2';
  document.getElementById('colorBtn7').style.background = '#C2009E';
  document.getElementById('colorBtn8').style.background = '#5C2B00';
  document.getElementById('colorBtn9').style.background = '#000000';
  document.getElementById('colorBtn10').style.background = '#FFFFFF';


  var funButtons = document.createElement('div');
    funButtons.className = 'funButtons';
    leftScreen.appendChild(funButtons);

  var eraseBtn = document.createElement('div');
    eraseBtn.id = 'eraseBtn';
    funButtons.appendChild(eraseBtn);
    document.getElementById( 'eraseBtn').innerHTML = 'Erase';

  //document.getElementById('eraseBtn').style.background = 'none';
  eraseBtn.addEventListener('click', function(){
    newColor = this.style.background;
    console.log(newColor);
    return newColor;

  });

  var clearBtn = document.createElement('div');
    clearBtn.id = 'clearBtn';
    funButtons.appendChild(clearBtn);
    document.getElementById( 'clearBtn').innerHTML = 'Clear';

  clearBtn.addEventListener('click', function(){
      var wholeGrid = canPixels;
      wholeGrid.style.background = '#ffffff';
      console.log(canPixels[p].style.background);

    });

  var undoButton = document.createElement( 'button' );//<------------button element
    undoButton.className = 'undoButton';
    funButtons.appendChild( undoButton );



};
