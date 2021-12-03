/*
リロードボタン（全ての関数・CSSをリセット）
*/

function re(){
  tenki_ = tenki.slice(0 , count - 2);
  console.log(tenki_);
  demo_flag = false;
  th = t.getHours();
  clearInterval(move_setInterval);
  move_setInterval = setInterval(move_set,30000);


  /*リロードとmoveが被った時の処理の試行錯誤*/

  /*clearTimeout(move_setTimeout_I);
  clearTimeout(move_setTimeout_H);
  clearTimeout(move_setTimeout_G);
  clearTimeout(move_setTimeout_F);
  clearTimeout(move_setTimeout_E);
  clearTimeout(move_setTimeout_D);
  clearTimeout(move_setTimeout_C);
  clearTimeout(move_setTimeout_B);
  clearTimeout(move_setTimeout_A);

  /*試行錯誤終わり*/


  walk_f = false;
  x = 46;
  y = 35.7;
  dx = 0.2;
  dy = 0.1;
  pc_f = false;
  read_f = false;
  sleep_f = false;
  syugei_f = false;
  closet = false;
  thisCount = 0;
  curtain_dark = 0;
  curtain = false;

  $("#book").css('opacity', '1');
  $("#futon").css('opacity', '1');
  $("#game_rimokon").css('opacity', '1');
  $("#mouse").css('opacity', '1');
  $('.closet').attr('src', 'images/closet.png');
  $('#curtain').attr('src', 'images/curtain.png');

  $('#where').html('現在の福岡');


  p_flag = false;
  t_flag = false;
  s_flag = false;
  g_flag = false;
  sumaho_f = false;




  dark = 100 - curtain_dark;
  $('#p_monitor').html('<img class="temae pc dark" id="pc" src="images/p_off.png">');
  $('#t_monitor').html('<img src="images/t_off.png" class="tv dark" style="filter:britress(' + dark + ');">');
  $('.dark').css('filter','brightness(' + dark + '%)');

  random = Math.floor(Math.random()* (7 - 1) + 1);
  animation();
  console.log(random);
}
