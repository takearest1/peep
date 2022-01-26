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


  walk_f = false;
  x = 46;
  y = 35.7;
  dx = 0.2;
  dy = 0.1;
  jarasi_f = false;
  tower_f = false;
  sleep_f = false;
  closet = false;
  thisCount = 0;
  curtain_dark = 0;
  curtain = false;

  $("#tower").css('opacity', '1');
  $("#jarasi").css('opacity', '1');
  $('.closet').attr('src', 'images/closet.png');
  $('#curtain').attr('src', 'images/curtain.png');

  $('#where').html('現在の福岡');


  /*p_flag = false;
  t_flag = false;
  s_flag = false;
  g_flag = false;
  sumaho_f = false;*/




  dark = 100 - curtain_dark;
  /*$('#p_monitor').html('<img class="temae pc dark" id="pc" src="images/p_off.png">');
  $('#t_monitor').html('<img src="images/t_off.png" class="tv dark" style="filter:britress(' + dark + ');">');*/
  $('.dark').css('filter','brightness(' + dark + '%)');

  random = Math.floor(Math.random()* (4 - 1) + 1);
  animation();
  console.log(random);
}
