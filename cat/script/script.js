/*
時間の管理
ランダムでキャラクターを表示
*/

var random = Math.floor(Math.random()* (4 - 1) + 1);
//var random = 5;
var t, th, tm;
var demo_flag = false;
//var w = 1;

window.onload = function(){
  t = new Date();
  th = t.getHours();
  tm = t.getMinutes();

  animation();

  setInterval(time, 30);//「30」毎にAnimateElementを読み込む。数字を大きくすれば遅くなる。

  haikei();

  setTimeout(function () {
    $("html,body").animate({scrollTop:($('.character').offset().top + $('.character').height()/3 - $('#hoge').width()/2)},1000);
    $("html,body").animate({scrollLeft:($('.character').offset().left + $('.character').width()/2 - $('#hoge').width()/2)},1000);
    console.log($('.character').offset());

  },300);
}

function time(){

  $('.dark').css('filter','brightness(' + dark + '%)');

  /////時間
    t = new Date();
  if(demo_flag == false){
    th = t.getHours();
  }
    tm = t.getMinutes();


  //th = 19;
  clock();
  haikei();


}

function animation() {
  //////男の子の表示
  //random = 4;
  console.log(random);
  //var chara = document.getElementById('chara');
  
    if(random == 1){
      tower();
    }else if(random == 2){
      sleep();
    }else if(random == 3){
      jarasi();
    }/*else{
      random = Math.floor(Math.random()* (4 - 1) + 1);
      animation();
    }*/
}
