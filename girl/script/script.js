/*
時間の管理
ランダムでキャラクターを表示
*/

var random = Math.floor(Math.random()* (7 - 1) + 1);
//var random = 5;
var t, th, tm;
var w = 1;

window.onload = function(){
  var walk = setInterval(AnimateElement, 30);//「5」毎にAnimateElementを読み込む。数字を大きくすれば遅くなる。
  /*$("html,body").animate({scrollLeft:($('#image').width() - $('#hoge').width())/2});
  $("html,body").animate({scrollTop:($('#container').height() - $('#hoge').height())/2});*/
  //$("html,body").animate({scrollLeft:($('#chara').offset().left});

  setTimeout(function () {
    $("html,body").animate({scrollTop:($('.character').offset().top + $('.character').height()/3 - $('#hoge').width()/2)},1000);
    $("html,body").animate({scrollLeft:($('.character').offset().left + $('.character').width()/2 - $('#hoge').width()/2)},1000);
    console.log($('.character').offset());
  },300);
}

function AnimateElement(){

  $('.dark').css('filter','brightness(' + dark + '%)');

  /////リロード
  var reload = document.getElementById('reload');
  reload.onclick = function(){
    re();
  }

  /////時間
  t = new Date();
  th = t.getHours();
  tm = t.getMinutes();

  //th = 8;

  haikei();
  clock();

  //////男の子の表示
  //random = 4;
  var chara = document.getElementById('chara');
  if(th < 7){
    random = 6;
    sleep();
  }else{
    if(random == 1){
      random = Math.floor(Math.random()* (7 - 1) + 1);
    }else if(random == 2){
      pc();
    }else if(random == 3){
      read();
    }else if(random == 4){
      syugei();
    }else if(random == 5){
      sumaho();
    }else if(random == 6){
      sleep();
    }
  }

  if(window.innerWidth >= 960){
    w = 1.2;
  }else {
    w = 1;
  }


}
