let fgImage = null;

let bgImage = null;

function loadforegroundImage(){
  let d1 = document.getElementById("fgFile");
  fgImage = new SimpleImage(d1);
  let ctx = document.getElementById("fg");
  fgImage.drawTo(ctx);
}

function loadbackgroundImage(){
  let d1 = document.getElementById("bgFile");
  bgImage = new SimpleImage(d1);
  let ctx = document.getElementById("bg");
  bgImage.drawTo(ctx);
}

function clearCanvas(){
  let c1 = document.getElementById("fg");
  let c2 = document.getElementById("bg");
  let cc1 = c1.getContext("2d");
  let cc2 = c2.getContext("2d");
  cc1.clearRect(0,0,c1.width,c1.height);
  cc2.clearRect(0,0,c2.width,c2.height);
} 

function doGreenScreen(){
 
    var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());
    for(var pixel of fgImage.values()){
      var x = pixel.getX();
      var y = pixel.getY();
      if(pixel.getGreen() > (pixel.getRed() + pixel.getBlue())){
        var bgPixel = bgImage.getPixel(x, y);
        output.setPixel(x,y,bgPixel);
      }
      else{
        output.setPixel(x,y,pixel);
      }
    }  
  
  if(fgImage == null || ! fgImage.complete())
    {
      alert("FGImage not loaded");
    }
  if(bgImage == null || ! bgImage.complete())
    {
      alert("BGImage not loaded");
    }
   clearCanvas();
  let ctx = document.getElementById("fg");
  output.drawTo(ctx);
}

