/*
リロードボタン（全ての関数・CSSをリセット）
*/

function re(){
  walk_f = false;
  x = 46;
  y = 35.7;
  dx = 0.2;
  dy = 0.1;
  pc_f = false;
  read_f = false;
  sleep_f = false;
  $("#book").css('opacity', '1');
  $("#futon").css('opacity', '1');
  $("#game_rimokon").css('opacity', '1');
  $("#mouse").css('opacity', '1');


  p_flag = false;
  t_flag = false;
  s_flag = false;
  g_flag = false;
  sumaho_f = false;

  dark = 100;
  $('#p_monitor').html('<img class="temae pc dark" id="pc" src="images/p_off.png">');
  $('#t_monitor').html('<img src="images/t_off.png" class="tv dark" style="filter:britress(' + dark + ');">');
  $('.dark').css('filter','brightness(' + dark + '%)');

  random = Math.floor(Math.random()* (7 - 1) + 1);
  console.log(random);
}
