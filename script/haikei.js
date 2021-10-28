/*
時間によって変化する
太陽（月）・窓・背景（空と建物）・グリッド
の処理
*/

// 東京(130000)の予報を取得
let url = "https://www.jma.go.jp/bosai/forecast/data/forecast/400000.json";

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(weather) {
        // 特定の地域(今回は東京)だけ選択して変数に詰め直す
        let area = weather[0].timeSeries[0].areas[0];

        var tenki = area.weathers[0];
        var count = 1;
        var count_flag = false;

        $(function kazoeru(){
          if(count_flag == false){
            tenki_ = tenki.slice(count - 1 , count);

            if(tenki_ == "　" || tenki_ == ""){
              count_flag = true;
            }
            count = count + 1;
            kazoeru();
          }else{
            tenki_ = tenki.slice(0 , count - 2);
            //tenki_ = "雪";//くもりで固定 後で絶対消すやつ


          }
          console.log(weather_dark);
        });
    });


var bg;
var sun , moon;
var win;

var ie;
var zimen , z_height , z_width;
var win_height , win_width;
var grid , rain;

var bg_color , win_tenki , win_rain;
var weather_dark = 0;

var weather_f = false;

function haikei(){
  bg = document.body;
  sun = document.getElementById('sun');
  moon = document.getElementById('moon');
  win = document.getElementById('win');

  zimen = document.getElementById('zimen');
  ie = document.getElementById('ie');
  z_height = document.body.clientHeight - 375.5 * w;
  win_height = document.getElementById('hoge').clientHeight;
  win_width = document.getElementById('hoge').clientWidth;

  if(document.body.clientWidth > imgwid){
    z_width = document.body.clientWidth;
  }else{
    z_width = imgwid;
  }
  grid = document.getElementById('grid');
  rain = document.getElementById('rain');
  win_rain = document.getElementById('win_rain');

  if(document.body.clientHeight < win_height){
    z_height = win_height - 375.5 * w;
  }

  if(tenki_ == "晴れ"){
    weather_dark = 0;
    win_tenki = '.png';
    if(6 <= th && th <= 11){
      bg_color = 'bedcde';
      sun.style.opacity = '1';
      moon.style.opacity = '0';
    }else if(12 <= th && th <= 16){
      bg_color = '97d2e2';
      sun.style.opacity = '1';
      moon.style.opacity = '0';
    }else if(17 <= th && th <= 18){
      bg_color = 'ed9056';
      sun.style.opacity = '0';
      moon.style.opacity = '0';
    }else{
      bg_color = '3b3b45';
      sun.style.opacity = '0';
      moon.style.opacity = '1';
    }

  }else if(tenki_ == "くもり"){
    weather_dark = 10;
    sun.style.opacity = '0';
    moon.style.opacity = '0';
    win_tenki = '_c.png';
    if(6 <= th && th <= 11){
      bg_color = 'b4b7b8';
    }else if(12 <= th && th <= 16){
      bg_color = '94908E';
    }else if(17 <= th && th <= 18){
      bg_color = '94908E';
    }else{
      bg_color = '4C4D50';
      weather_dark = 0;
    }

  }else if(tenki_ == "雨"){
    weather_dark = 10;
    sun.style.opacity = '0';
    moon.style.opacity = '0';
    rain.style.backgroundImage = "url(images/rain.gif)";
    if(weather_f == false){
      win_rain.setAttribute('src', 'images/win_rain.gif');
      weather_f = true;
    }
    win_tenki = '_c.png';
    if(6 <= th && th <= 11){
      bg_color = 'b4b7b8';
      rain.style.opacity = "0.2";
      win_rain.style.opacity = "0.8";
    }else if(12 <= th && th <= 16){
      bg_color = '94908E';
      rain.style.opacity = "0.1";
      win_rain.style.opacity = "0.7";
    }else if(17 <= th && th <= 18){
      bg_color = '94908E';
      rain.style.opacity = "0.1";
      win_rain.style.opacity = "0.5";
    }else{
      bg_color = '4C4D50';
      rain.style.opacity = "0.1";
      win_rain.style.opacity = "0.5";
      weather_dark = 0;
    }
  }

  else{//晴れ、くもり、雨以外の天気になった時にひとまず晴れさせとく
    weather_dark = 0;
    win_tenki = '.png';
    if(6 <= th && th <= 11){
      bg_color = 'bedcde';
      sun.style.opacity = '1';
      moon.style.opacity = '0';
    }else if(12 <= th && th <= 16){
      bg_color = '97d2e2';
      sun.style.opacity = '1';
      moon.style.opacity = '0';
    }else if(17 <= th && th <= 18){
      bg_color = 'ed9056';
      sun.style.opacity = '0';
      moon.style.opacity = '0';
    }else{
      bg_color = '3b3b45';
      sun.style.opacity = '0';
      moon.style.opacity = '1';
    }
  }
  

  bg.style.backgroundColor = '#' + bg_color;

  if(6 <= th && th <= 11){
    win.setAttribute('src', 'images/win_m' + win_tenki);
    ie.style.opacity = '0.4';
    zimen.style.backgroundColor = '#fff';
    zimen.style.opacity = '0.4';
    grid.style.opacity = '0.08';
  }else if(12 <= th && th <= 16){
    win.setAttribute('src', 'images/win_no' + win_tenki);
    ie.style.opacity = '0.5';
    zimen.style.backgroundColor = '#fff';
    zimen.style.opacity = '0.5';
    grid.style.opacity = '0.08';
  }else if(17 <= th && th <= 18){
    win.setAttribute('src', 'images/win_e' + win_tenki);
    ie.style.opacity = '1';
    ie.style.backgroundImage = "url(images/ie_e.png)";
    zimen.style.backgroundColor = '#54565F';
    zimen.style.opacity = '1';
    grid.style.opacity = '0.1';
  }else{
    win.setAttribute('src', 'images/win_ni' + win_tenki);
    ie.style.backgroundImage = "url(images/ie.png)";
    ie.style.opacity = '0.2';
    zimen.style.opacity = '0.2';
    zimen.style.backgroundColor = '#fff';
    grid.style.opacity = '0.15';
  }

  zimen.style.height = z_height + 'px';
  zimen.style.width = z_width + 'px';
  ie.style.width = z_width + 'px';

  grid.style.width = z_width + 'px';
  grid.style.height = (z_height + (375.5 * w)) + 'px';

  rain.style.width = z_width + 'px';
  rain.style.height = (z_height + (375.5 * w)) + 'px';
};
