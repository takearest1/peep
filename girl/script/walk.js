/*
部屋の中をぐるぐる回るやつ
*/

var x = 46;
var y = 35.7;

var dx = 0.2;
var dy = 0.1;



var walk_f = false;

function walk(){
  if(walk_f == false){
    chara.innerHTML = '<div id="walk"><img id="character" class="dark" src="images/walk2.gif"></div>';
    console.log('a');
    walk_f = true;
  }
  var obj2 = document.getElementById('walk');
  var obj = document.getElementById('character');

  //console.log(window.innerWidth);


  //console.log(w);

  if( x < 27){
     dx *= -1;
     obj.style.transform = 'scale(-1, 1)';
     obj.style.zIndex = '2';
     x = 27.1;
     y = 45.2;
     /*obj2.style.transform = 'scale(-1, 1)';
     obj2.style.zIndex = '2';*/

   }else if( 69.4 < x){
    dx *= -1;
    obj.style.transform = 'scale(1, 1)'
    obj.style.zIndex = '0';
    //obj2.style.transform = 'scale(1, 1)'
    //obj2.style.zIndex = '0';
  }

  if( y < 35.7 ){
    dy *= -1;
    x = 46;
    y = 35.7;
    obj2.innerHTML = '<img id="character" class="dark" src="images/walk2.gif" style="left:' + x*w + 'px; top:' + y*w + 'px;">';
    obj = document.getElementById('character');
    obj.style.filter = 'brightness(' + dark + '%)'
  }else if( 57 < y ){
    dy *= -1;
    //y = 59;
    obj2.innerHTML = '<img id="character" class="dark" src="images/walk1.gif" style="left:' + x*w + 'px; top:' + y*w + 'px;">';
    obj = document.getElementById('character');
    obj.style.filter = 'brightness(' + dark + '%)'
    obj.style.transform = 'scale(-1, 1)'
    obj.style.zIndex = '2'
  }

  x -= dx;
  y += dy;
  //style.cssのほうでboxをあらかじめ「posirion:absolute;」にしておく。
  //で、cssの「left(top):〇〇;」を書き換えることで移動させる。
  obj.style.left = x + '%';
  obj.style.top = y + '%';

  //obj2.style.left = x*w + 'px';
  //obj2.style.top = y*w + 'px';

  //console.log(x);

}
