var time_demo;
var demo_flag = false;

$(function(){
  $('#image').append('<img src="images/weather.png" id="demo_weather" class="demo_icon hover">');
  $('#image').append('<img src="images/time.png" id="demo_time" class="demo_icon hover">');

  $('.demo_icon').css({
    'width':'50px',
    'bottom':'20px',
    'position':'fixed',
    'pointer-events':'auto'
  });

  $('#demo_weather').css('right','20px');
  $('#demo_time').css('right','80px');

  $('#demo_weather').click(function(){
    if(tenki_ == "晴れ"){
      tenki_ = "くもり";
    }else if(tenki_ == "くもり"){
      tenki_ = "雨";
      $('#win_rain').css('opacity','0.5');
    }else if(tenki_ == "雨"){
      tenki_ = "晴れ";
      $('#win_rain').css('opacity','0');
      rain.style.backgroundImage = "url()";
      win_rain.setAttribute('src', '');
      weather_f = false;
    }else{
      tenki_ = "くもり";
    }
  });

  $('#demo_time').click(function(){
    demo_flag = true;
    if(6 <= th && th <= 11){
      th = 12;
    }else if(12 <= th && th <= 16){
      th = 17;
    }else if(17 <= th && th <= 18){
      th = 19;
    }else{
      th = 6;
    }
    console.log(s_flag);
    if(s_flag == true){
      syoumei_off();
    }else{
      syoumei_on();
    }

  });
console.log(s_flag);
});
