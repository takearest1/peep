var random2;
/*
1 = タワー
2 = 寝る
3 = 猫じゃらし
*/
var walking = 2200;
var move_setInterval;
$(function () {
  move_setInterval = setInterval(move_set,30000);//移動までの間

});

function move_set() {
  move();
}


function move() {
  random2 = Math.floor(Math.random()* (4 - 1) + 1);//移動先の決定
  //if(random2 == 2){random2 = 3;}else{random2 = 2;};

  /*-------タワー-------*/
  if(random == 1){
    if (random2 == 1) {
      move();
    }
    //random2 = 6;///////あとで絶対に消すやつ

    ///////立ち上がる動作
    $("#tower").css('opacity', '0');
    chara.innerHTML = '<img id="tower_up" class="dark character" src="images/tower_up.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + ');">';
    setTimeout(function () {
      //$("#tower").css('opacity', '1');
    },400);
    setTimeout(function () {
      chara.innerHTML = '<img id="character" class="dark character" src="images/walk2.gif" style="filter:britress(' + dark + ');">';
      $("#character").css({'top':'59.5%','left':'58.4%','z-index':'1'});//スタート地点
      $("#tower").css('opacity', '1');

      ///////タワーから立った後の動作
      if(random2 == 2){//ベッドに行く
      $('#character')
        .animate({'top':'72%','left':'33.4%'},2200);//ゴール地点
        setTimeout(function () {
            chara.innerHTML = '<img id="sleep_down" class="dark character" src="images/sleep_down.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + ');">';
            setTimeout(function () {
              random = 2;
              sleep_f = false;
              sleep();
            },3000);//座るのにかかる時間
        },2200);//移動にかかる時間
      };

      if(random2 == 3){//猫じゃらしに行く
      /*$('#character')
        .animate({'top':'59%','left':'55%'},700);//ゴール地点*/
        //setTimeout(function () {
            chara.innerHTML = '<img id="jarasi_down" class="dark character" src="images/jarasi_down.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + ');">';
            setTimeout(function () {
              random = 3;
              jarasi_f = false;
              jarasi();
            },2200);//座るのにかかる時間
        //},700);//移動にかかる時間
      };


    },1300);//立ち上がるのにかかる時間
  };


  /*-------ベッド-------*/
  if(random == 2){
    if (random2 == 2 || random2 == 3) {
      move();
    }

    ///////立ち上がる動作
    chara.innerHTML = '<img id="sleep_up" class="dark character" src="images/sleep_up.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + ');">';
    setTimeout(function () {
      chara.innerHTML = '<img id="character" class="dark character" src="images/walk1.gif" style="filter:britress(' + dark + ');">';
      $("#character").css({'top':'65.5%','left':'46.7%','z-index':'1','transform':'scale(-1, 1)'});//スタート地点


      ///////ベッドから立った後の動作
      if(random2 == 1){//タワーに行く
        $('#character')
          .animate({'top':'57%','left':'62.4%'},2000);//ゴール地点 //移動にかかる時間
        setTimeout(function () {
            chara.innerHTML = '<img id="tower_down" class="dark character" src="images/tower_down.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + ');">';
            $("#tower").css('opacity', '0');
            setTimeout(function () {

              random = 1;
              tower_f = false;
              tower();
              console.log("tower");
            },2000);//座るのにかかる時間
        },2000);//移動にかかる時間
      };


    },3300);//立ち上がるのにかかる時間 1800だいぶ短い
  }


  /*-------猫じゃらし-------*/
  if(random == 3){
    if (random2 == 2 || random2 == 3) {
      move();
    }

    ///////立ち上がる動作
    chara.innerHTML = '<img id="jarasi_up" class="dark character" src="images/jarasi_up.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + ');">';
    $("#jarasi").css('opacity', '1');
    setTimeout(function () {
        chara.innerHTML = '<img id="character" class="dark character" src="images/walk1.gif" style="filter:britress(' + dark + ');">';
        $("#character").css({'top':'57%','left':'55%','z-index':'1','transform':'scale(-1, 1)'});//スタート地点


      ///////猫じゃらしから立った後の動作

      if(random2 == 1){//タワーに行く
        $('#character')
          .animate({'top':'57%','left':'59.4%'},1000);//ゴール地点 //移動にかかる時間
        setTimeout(function () {
            chara.innerHTML = '<img id="tower_down" class="dark character" src="images/tower_down.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + ');">';
            $("#tower").css('opacity', '0');
            setTimeout(function () {

              random = 1;
              tower_f = false;
              tower();
              console.log("tower");
            },2000);//座るのにかかる時間
        },1000);//移動にかかる時間
      };


    },1000);//立ち上がるのにかかる時間　●
  }


}//このプログラム全体のしっぽ
