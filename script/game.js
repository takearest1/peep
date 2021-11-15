/*
ゲームしてるキャラとテレビの画面の処理
*/

var g_flag = false;
//var yoru = document.getElementsByClassName("dark");

function game_syugei(){

  if(g_flag == false){
    chara.innerHTML = '<img class="dark character" id="g_chara" src="images/game.gif">';
    var tm = document.getElementById('t_monitor');
    tm.innerHTML = '<img src="images/t_game.gif" class="tv">';
    $("#game_rimokon").css('opacity', '0');
    g_flag = true;
    t_flag = true;
    console.log('game');
  }

  //console.log('game');
}
