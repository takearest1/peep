var random2 = 3;
/*
1 = null
2 = パソコン
3 = 本
4 = ゲーム
5 = スマホ
6 = 寝る
*/
var walking = 2200;
var move_setInterval;
$(function () {
  move_setInterval = setInterval(move_set,30000);//移動までの間

});

function move_set() {
  if(th > 6){
    move();
  };
}

var move_setTimeout_A,
    move_setTimeout_B,
    move_setTimeout_C,
    move_setTimeout_D,
    move_setTimeout_E,
    move_setTimeout_F,
    move_setTimeout_G,
    move_setTimeout_H,
    move_setTimeout_I;

function move() {
  random2 = Math.floor(Math.random()* (7 - 1) + 1);//移動先の決定
  console.log(random + '→' + random2);
  //if(random2 == 2){random2 = 3;}else{random2 = 2;};

  /*-------PC-------*/
  if(random == 2){
    if (random2 == 1 || random2 == 2 || random2 == 4) {
      move();
    }
    //random2 = 6;///////あとで絶対に消すやつ

    ///////立ち上がる動作
    chara.innerHTML = '<img id="pc_up" class="dark character" src="images/pc_up.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + '%);">';
    move_setTimeout_A = setTimeout(function () {
      pm.innerHTML = '<img class="temae pc dark" id="pc" src="images/p_off.png" style="filter:britress(' + dark + '%);">';
      p_flag = false;
      random = 0;
      $("#mouse").css('opacity', '1');
    },400);
    move_setTimeout_B = setTimeout(function () {
      if(random2 == 6 && s_flag == false){
        chara.innerHTML = '<div id="walk"><img id="character" class="dark character" src="images/walk2.gif" style="filter:britress(' + dark + '%);"></div>';
        $("#character").css({'top':'52.5%','left':'50%','z-index':'1'});//スタート地点
      }else{
        chara.innerHTML = '<div id="walk"><img id="character" class="dark character" src="images/walk1.gif" style="filter:britress(' + dark + '%);"></div>';
        $("#character").css({'top':'52.5%','left':'50%','z-index':'1','transform':'scale(-1, 1)'});//スタート地点
      }

      ///////PCから立った後の動作
      if(random2 == 3){//本読みに行く
      $('#character')
        .animate({'top':'40%','left':'66.9%'},2200);//ゴール地点
        move_setTimeout_C = setTimeout(function () {
            chara.innerHTML = '<img id="read_down" class="dark character" src="images/read_down.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + '%);">';
            $("#book").css('opacity', '0');
        },2200);//移動にかかる時間
        move_setTimeout_D = setTimeout(function () {
          random = 3;
          read_f = false;
          read();
        },3700);//座るのにかかる時間
      };

      if(random2 == 5){//スマホしに行く
      $('#character')
        .animate({'top':'40%','left':'66.9%'},2200);//ゴール地点
        move_setTimeout_C = setTimeout(function () {
          chara.innerHTML = '<img id="sumaho_down" class="dark character" src="images/sumaho_down.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + '%);">';
        },2200);//移動にかかる時間
        move_setTimeout_D = setTimeout(function () {
          random = 5;
          sumaho_f = false;
          sumaho();
        },3700);//座るのにかかる時間
      };

      if(random2 == 6){//寝る
        if(s_flag == true){
          $('#character')
            .animate({'top':'40%','left':'66.9%'},2200);//ゴール地点
            walking = 2200;
        }else{
          $('#character')
            .animate({'top':'57.5%','left':'40%'},2000);
          move_setTimeout_C = setTimeout(function () {
            $('#character').attr('src', 'images/walk1.gif');
            $('#character')
              .animate({'top':'42%','left':'18%'},3000);
          },2000);
          move_setTimeout_D = setTimeout(function () {
            chara.innerHTML = '<img id="syomei" class="dark character" src="images/syomei.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + '%);">';
          },5000);
          move_setTimeout_E = setTimeout(function () {
            syoumei_off();
          },5500)
          move_setTimeout_F = setTimeout(function () {
            chara.innerHTML = '<div id="walk"><img id="character" class="dark character" src="images/walk2.gif" style="filter:britress(' + dark + '%);"></div>';
            $('#character').css({'top':'42%','left':'18%','transform':'scale(-1,1)','z-index':'1'},2200);
            $('#character')
              .animate({'top':'57.5%','left':'40%'},3000);
          },6500);
          move_setTimeout_G = setTimeout(function () {
            $('#character').attr('src', 'images/walk1.gif');
            $('#character')
              .animate({'top':'40%','left':'66.9%'},2200);
          },9000);
          walking = 11700;
        };

        move_setTimeout_H = setTimeout(function () {
            chara.innerHTML = '<img id="sleep_down" class="dark character" src="images/sleep_down.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + '%);">';
            $("#futon").css('opacity', '0');
        },walking);//移動にかかる時間
        move_setTimeout_I = setTimeout(function () {
          random = 6;
          sleep_f = false;
          sleep();
        },walking + 2000);//座るのにかかる時間
      };


    },2000);//立ち上がるのにかかる時間
  };


  /*-------本-------*/
  if(random == 3){
    if (random2 == 1 || random2 == 3 || random2 == 5|| random2 == 6) {
      move();
    }

    ///////立ち上がる動作
    chara.innerHTML = '<img id="read_up" class="dark character" src="images/read_up.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + '%);">';
    move_setTimeout_A = setTimeout(function () {
      chara.innerHTML = '<div id="walk"><img id="character" class="dark character" src="images/walk2.gif" style="filter:britress(' + dark + '%);"></div>';
      $("#character").css({'top':'40%','left':'66.9%','z-index':'1'});//スタート地点
      $("#book").css('opacity', '1');

      ///////本から立った後の動作
      if(random2 == 2){//パソコンしに行く
        $('#character')
          .animate({'top':'45%','left':'60%'},2000);//ゴール地点 //移動にかかる時間
        move_setTimeout_B = setTimeout(function () {
            chara.innerHTML = '<img id="pc_down" class="dark character" src="images/pc_down.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + '%);">';
        },2000);//移動にかかる時間
        move_setTimeout_C = setTimeout(function () {
          $("#mouse").css('opacity', '0');
          random = 2;
          pc_f = false;
          pc();
          console.log("pc");
        },3000);//座るのにかかる時間
      };

      if(random2 == 4){//ゲームしに行く
        $('#character')
          .animate({'top':'45%','left':'60%'},2000);//ゴール地点 //移動にかかる時間
        move_setTimeout_B = setTimeout(function () {
            chara.innerHTML = '<img id="game_down" class="dark character" src="images/game_down.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + '%);">';
        },2000);//移動にかかる時間
        move_setTimeout_C = setTimeout(function () {
          tm = document.getElementById('t_monitor');
          tm.innerHTML = '<img src="images/t_game.gif" class="tv">';
          t_flag = true;
        },2800);
        $("#game_rimokon").css('opacity', '0');
        move_setTimeout_D = setTimeout(function () {
          random = 4;
          g_flag = false;
          game_syugei();
        },4000);//座るのにかかる時間
      };


    },1800);//立ち上がるのにかかる時間
  }


  /*-------ゲーム-------*/
  if(random == 4){
    if (random2 == 1 || random2 == 2 || random2 == 4) {
      move();
    }

    ///////立ち上がる動作
    chara.innerHTML = '<img id="game_up" class="dark character" src="images/game_up.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + '%);">';
      var tm = document.getElementById('t_monitor');
      tm.innerHTML = '<img src="images/t_off.png" class="tv dark" style="filter:britress(' + dark + '%);">';
      t_flag = false;
      g_flag = false;
      random = 0;
    move_setTimeout_A = setTimeout(function () {
      $("#game_rimokon").css('opacity', '1');
      if(random2 == 6 && s_flag == false){
        chara.innerHTML = '<div id="walk"><img id="character" class="dark character" src="images/walk2.gif" style="filter:britress(' + dark + '%);"></div>';
        $("#character").css({'top':'52.5%','left':'50%','z-index':'1'});//スタート地点
      }else{
        chara.innerHTML = '<div id="walk"><img id="character" class="dark character" src="images/walk1.gif" style="filter:britress(' + dark + '%);"></div>';
        $("#character").css({'top':'52.5%','left':'50%','z-index':'1','transform':'scale(-1, 1)'});//スタート地点
      }

      ///////ゲームから立った後の動作

      if(random2 == 3){//本読みに行く
      $('#character')
        .animate({'top':'40%','left':'66.9%'},2200);//ゴール地点
        move_setTimeout_B = setTimeout(function () {
            chara.innerHTML = '<img id="read_down" class="dark character" src="images/read_down.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + '%);">';
            $("#book").css('opacity', '0');
        },2200);//移動にかかる時間
        move_setTimeout_C = setTimeout(function () {
          random = 3;
          read_f = false;
          read();
        },3700);//座るのにかかる時間
      };

      if(random2 == 5){//スマホしに行く
      $('#character')
        .animate({'top':'40%','left':'66.9%'},2200);//ゴール地点
        move_setTimeout_B = setTimeout(function () {
            chara.innerHTML = '<img id="sumaho_down" class="dark character" src="images/sumaho_down.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + '%);">';
        },2200);//移動にかかる時間
        move_setTimeout_C = setTimeout(function () {
          random = 5;
          sumaho_f = false;
          sumaho();
        },3700);//座るのにかかる時間
      };

      var walking = 2200;
      if(random2 == 6){//寝る
        if(s_flag == true){
          $('#character')
            .animate({'top':'40%','left':'66.9%'},2200);//ゴール地点
            walking = 2200;
        }else{
          $('#character')
            .animate({'top':'57.5%','left':'40%'},2000);
          move_setTimeout_B = setTimeout(function () {
            $('#character').attr('src', 'images/walk1.gif');
            $('#character')
              .animate({'top':'42%','left':'18%'},3000);
          },2000);
          move_setTimeout_C = setTimeout(function () {
            chara.innerHTML = '<img id="syomei" class="dark character" src="images/syomei.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + '%);">';
          },5000);
          move_setTimeout_D = setTimeout(function () {
            syoumei_off();
          },5500)
          move_setTimeout_E = setTimeout(function () {
            chara.innerHTML = '<div id="walk"><img id="character" class="dark character" src="images/walk2.gif" style="filter:britress(' + dark + '%);"></div>';
            $('#character').css({'top':'42%','left':'18%','transform':'scale(-1,1)','z-index':'1'},2200);
            $('#character')
              .animate({'top':'57.5%','left':'40%'},3000);
          },6500);
          move_setTimeout_F = setTimeout(function () {
            $('#character').attr('src', 'images/walk1.gif');
            $('#character')
              .animate({'top':'40%','left':'66.9%'},2200);
          },9500);
          walking = 11700;
        };

        move_setTimeout_G = setTimeout(function () {
            chara.innerHTML = '<img id="sleep_down" class="dark character" src="images/sleep_down.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + '%);">';
            $("#futon").css('opacity', '0');
        },walking);//移動にかかる時間
        move_setTimeout_H = setTimeout(function () {
          random = 6;
          sleep_f = false;
          sleep();
        },walking + 2000);//座るのにかかる時間
      }


    },2500);//立ち上がるのにかかる時間
  }

  /*-------スマホ-------*/
  if(random == 5){
    console.log("スマホから" + random2);
    if (random2 == 1 || random2 == 3 || random2 == 5|| random2 == 6) {
      move();
    }

    ///////立ち上がる動作
    chara.innerHTML = '<img id="sumaho_up" class="dark character" src="images/sumaho_up.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + '%);">';
    move_setTimeout_A = setTimeout(function () {
      chara.innerHTML = '<div id="walk"><img id="character" class="dark character" src="images/walk2.gif" style="filter:britress(' + dark + '%);"></div>';
      $("#character").css({'top':'42%','left':'65.5%','z-index':'1'});//スタート地点

      ///////スマホから立った後の動作
      if(random2 == 2){//パソコンしに行く
        $('#character')
          .animate({'top':'45%','left':'60%'},1000);//ゴール地点 //移動にかかる時間
        move_setTimeout_B = setTimeout(function () {
            chara.innerHTML = '<img id="pc_down" class="dark character" src="images/pc_down.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + '%);">';
          },1000);//移動にかかる時間
          move_setTimeout_C = setTimeout(function () {
            random = 2;
            $("#mouse").css('opacity', '0');
            pc_f = false;
            pc();
            console.log("pc");
          },2000);//座るのにかかる時間
        };

        if(random2 == 4){//ゲームしに行く
          $('#character')
            .animate({'top':'45%','left':'60%'},2000);//ゴール地点 //移動にかかる時間
          move_setTimeout_B = setTimeout(function () {
              chara.innerHTML = '<img id="game_down" class="dark character" src="images/game_down.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + '%);">';
          },2000);//移動にかかる時間
          move_setTimeout_C = setTimeout(function () {
            tm = document.getElementById('t_monitor');
            tm.innerHTML = '<img src="images/t_game.gif" class="tv">';
            t_flag = true;
          },2800);
          $("#game_rimokon").css('opacity', '0');
          move_setTimeout_D = setTimeout(function () {
            random = 4;
            g_flag = false;
            game_syugei();
          },4000);//座るのにかかる時間
        };


    },1000);//立ち上がるのにかかる時間
  }

  /*-------ベッド-------*/
  if(random == 6){
    if (random2 == 1 || random2 == 3 || random2 == 5|| random2 == 6) {
      move();
    }

    ///////立ち上がる動作
    chara.innerHTML = '<img id="sleep_up" class="dark character" src="images/sleep_up.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + '%);">';
    move_setTimeout_A = setTimeout(function () {
      chara.innerHTML = '<div id="walk"><img id="character" class="dark character" src="images/walk2.gif" style="filter:britress(' + dark + '%);"></div>';
      $("#futon").css('opacity', '1');
      $("#character").css({'top':'40%','left':'68.7%','z-index':'1'});//スタート地点

      if(s_flag == true){
        $('#character')
          .animate({'top':'57.5%','left':'40%'},3500);
        move_setTimeout_B = setTimeout(function () {
          $('#character').attr('src', 'images/walk1.gif');
          $('#character')
            .animate({'top':'42%','left':'18%'},3000);
        },3500);
        move_setTimeout_C = setTimeout(function () {
          chara.innerHTML = '<img id="syomei" class="dark character" src="images/syomei.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + '%);">';
        },6500)
        move_setTimeout_D = setTimeout(function () {
          syoumei_on();
        },7000)
        move_setTimeout_E = setTimeout(function () {
          chara.innerHTML = '<div id="walk"><img id="character" class="dark character" src="images/walk2.gif" style="filter:britress(' + dark + '%);"></div>';
          $('#character').css({'top':'42%','left':'18%','transform':'scale(-1,1)','z-index':'1'},2200);
          $('#character')
            .animate({'top':'57.5%','left':'40%'},3000);
        },8000)
        move_setTimeout_F = setTimeout(function () {
          $('#character').attr('src', 'images/walk1.gif');
        },11000);
        walking = 11000;
      }else{
        walking = 0;
      };



      setTimeout(function () {

      ///////ベッドから立った後の動作
      if(random2 == 2){//パソコンしに行く
        $('#character')
          .animate({'top':'45%','left':'60%'},1500);//ゴール地点 //移動にかかる時間
        move_setTimeout_G = setTimeout(function () {
            chara.innerHTML = '<img id="pc_down" class="dark character" src="images/pc_down.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + '%);">';
        },1500);//移動にかかる時間
        move_setTimeout_H = setTimeout(function () {
          random = 2;
          $("#mouse").css('opacity', '0');
          pc_f = false;
          pc();
          console.log("pc");
        },2500);//座るのにかかる時間
      };

      if(random2 == 4){//ゲームしに行く
        $('#character')
          .animate({'top':'45%','left':'60%'},2000);//ゴール地点 //移動にかかる時間
        move_setTimeout_G = setTimeout(function () {
            chara.innerHTML = '<img id="game_down" class="dark character" src="images/game_down.gif?' +(new Date).getTime()+ '" style="filter:britress(' + dark + '%);">';
        },2000);//移動にかかる時間
        move_setTimeout_H = setTimeout(function () {
          tm = document.getElementById('t_monitor');
          tm.innerHTML = '<img src="images/t_game.gif" class="tv">';
          t_flag = true;
        },2800);
        $("#game_rimokon").css('opacity', '0');
        move_setTimeout_I = setTimeout(function () {
          random = 4;
          g_flag = false;
          game_syugei();
        },4000);//座るのにかかる時間
      };


      },walking);
    },3800);//立ち上がるのにかかる時間
  }


}//このプログラム全体のしっぽ
