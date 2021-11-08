/*
画面右下の時計
*/

var c_count = 0;
var colon;
var clock_1 , clock_2 , clock_3 , clock_4;

var clock_h , clock_m;

function clock() {
  //////「：」が点滅するやつ
  c_count = c_count + 1;
  if(c_count == 33){
    colon = document.getElementById('colon').style.opacity = '0';
  }else if(c_count == 66){
    colon = document.getElementById('colon').style.opacity = '0.8';
    c_count = 0;
  }

  clock_1 = document.getElementById('c_1');
  clock_2 = document.getElementById('c_2');
  clock_3 = document.getElementById('c_3');
  clock_4 = document.getElementById('c_4');

  clock_m = String(tm).slice( -1 );
  clock_1.innerHTML = '<img src="images/tokei/1/' + clock_m + '.png">';
  clock_m = String(tm).slice( -2 , -1 );
  if(!clock_m == ''){
    clock_2.innerHTML = '<img src="images/tokei/2/' + clock_m + '.png">';
  }else {
    clock_2.innerHTML = '<img src="images/tokei/2/0.png">';
  }

  clock_h = String(th).slice( -1 );
  clock_3.innerHTML = '<img src="images/tokei/3/' + clock_h + '.png">';
  clock_h = String(th).slice( -2 , -1 );
  if(!clock_h == ''){
    clock_4.innerHTML = '<img src="images/tokei/4/' + clock_h + '.png" id="kesu">';
  }else {
    clock_4.innerHTML = '<img src="images/tokei/4/null.png" id="kesu">';
  }
}
