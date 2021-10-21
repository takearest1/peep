var p_flag = false;
var t_flag = false;
var s_flag = false;
var dark = 100;

$(function(){
  $('.pc').click( function(){
    if(p_flag == false){
    $('#p_monitor').html('<img class="temae pc right" id="pc" src="images/p_on.gif">');
    p_flag = true;
  }else{
    $('#p_monitor').html('<img class="temae pc dark" id="pc" src="images/p_off.png">');
    $('.pc').css('filter','brightness(' + dark + '%)');
    p_flag = false;
  }
  });

  $('.tv').click( function(){
    if(t_flag == false){
    $('#t_monitor').html('<img src="images/t_on.gif" class="tv">');
    t_flag = true;
  }else{
    $('#t_monitor').html('<img src="images/t_off.png" class="tv dark">');
    t_flag = false;
    $('.tv').css('filter','brightness(' + dark + '%)');
  }
  });

  $('#switch').click(function(){
    if(s_flag == false){
      if(6 <= th && th <= 11){
        dark = 70;
      }else if(12 <= th && th <= 18){
        dark = 85;
      }else{
        dark = 50;
      }
      s_flag = true;
    }else{
      dark = 100;
      s_flag = false;
    }
  });

});
