// a: canvas.getContext('2d')
// b: document.body
// c: canvas
(function ( ctx, body, canvas, colors, x, y, c1,c2,c3,text, count, comp ) {
  colors = ['#ff0077','#AAEE22', '#04DBE5', '#FFB412'];
  text = ['i miss you.', 'i love you.', 'you\'re cute.'];
  comp = ['xor','lighter'];
  c1 = c2 = c3 = count = 0;
  rn = function(z){ return ~~(Math.random()*z) }
  canvas.width = x = window.screen.width;
  canvas.height = y = window.screen.height;
  ctx.fillStyle = '#222';
  ctx.fillRect(0,0,x,y);
  ctx.shadowBlur = 100;
  
  function gradientFn() {
      ctx.font= (rn(50)+100)+"px Futura, Helvetica, sans-serif";
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillText(text[c3++%3], rn(x/2)+400, rn(y/2)+500);
  };

  (function draw() {
    if(!(count%15)){
        body.style.backgroundColor = colors[c1++%4];
    }
    ctx.shadowColor = colors[count%4];
    if(!(count%200)){
        gradientFn();
    }
    if(!(count++%50)){
      ctx.globalCompositeOperation = comp[(c2++)%2];
    }
    drawHeart(55+rn(x),40+rn(y));
    setTimeout(draw, 10);
  })();
  
  // Stealing MDN's Heart
  // https://developer.mozilla.org/en/Canvas_tutorial/Drawing_shapes
  function drawHeart(x, y, c, bz) {
    bz = ctx.bezierCurveTo;
    ctx.beginPath();
    ctx.moveTo(x, y);
      ctx.font= (rn(20)+100)+"px Futura, Helvetica, sans-serif";
    ctx.fillText('♥', x, y);

    // Opted for unicode heart, this saved 270bytes since we can also remove apply fn!
   /* apply(bz, ctx, [x, y-3, x-5, y-15, x-25, y-15]);
    apply(bz, ctx, [x-55,y-15,x-55,y+22.5,x-55,y+22.5]);
    apply(bz, ctx, [x-55,y+40,x-35,y+62,x,y+80]);
    apply(bz, ctx, [x+35,y+62,x+55,y+40,x+55,y+22.5]);
    apply(bz, ctx, [x+55,y+22.5,x+55,y-15,x+25,y-15]);
    apply(bz, ctx, [x+10,y-15,x,y-3,x,y]);
    ctx.fill();*/
  }
/*
  function apply(fn, t, args) {
    fn.apply(t, args);
  }
*/

})(a,b,c);
