/*
時間によって変化する
太陽（月）・窓・背景（空と建物）・グリッド
の処理
*/

// 東京(130000)の予報を取得
let url = "https://www.jma.go.jp/bosai/forecast/data/forecast/400000.json";

let area,tenki,count,count_flag;

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(weather) {
        // 特定の地域(今回は東京)だけ選択して変数に詰め直す
        area = weather[0].timeSeries[0].areas[0];

        tenki = area.weathers[0];
        count = 1;
        count_flag = false;

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
//var win_height , win_width;
var grid , rain;

var bg_color , win_tenki , win_rain;
var weather_dark = 0;

var weather_f = false;

var moon_img;

function haikei(){
  if(moonage > 28 || moonage < 1){
    moon_img = 8;
  }else if(moonage < 5){
    moon_img = 1;
  }else if(moonage < 9){
    moon_img = 2;
  }else if(moonage < 13){
    moon_img = 3;
  }else if(moonage < 16){
    moon_img = 4;
  }else if(moonage < 19){
    moon_img = 5;
  }else if(moonage < 23){
    moon_img = 6;
  }else if(moonage < 27){
    moon_img = 7;
  };
  //console.log(moon_img);
  $('#moon').attr('src', 'images/moon/moon' + moon_img + '.png');


  bg = document.body;
  sun = document.getElementById('sun');
  moon = document.getElementById('moon');
  win = document.getElementById('win');

  zimen = document.getElementById('zimen');
  ie = document.getElementById('ie');
  //z_height = document.body.clientHeight - 375.5 * w; //375.5は空の部分
  //win_height = document.getElementById('hoge').clientHeight;
  //win_width = document.getElementById('hoge').clientWidth;

  /*if(document.body.clientWidth > imgwid){
    z_width = document.body.clientWidth;
  }else{
    z_width = imgwid;
  }*/
  grid = document.getElementById('grid');
  rain = document.getElementById('rain');
  win_rain = document.getElementById('win_rain');

  /*if(document.body.clientHeight < win_height){
    z_height = win_height - 375.5 * w;
  }*/

  if(tenki_ == "晴れ"){
    weather_dark = 0;
    win_tenki = '.png';
    $('#win_rain').css('opacity','0');
    rain.style.backgroundImage = "url()";
    win_rain.setAttribute('src', '');
    weather_f = false;
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
    $('#win_rain').css('opacity','0');
    rain.style.backgroundImage = "url()";
    win_rain.setAttribute('src', '');
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
    $('#win_rain').css('opacity','0.5');
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
    $('#win_rain').css('opacity','0');
    rain.style.backgroundImage = "url()";
    win_rain.setAttribute('src', '');
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



  //zimen.style.height = z_height + 'px';
  //zimen.style.width = z_width + 'px';
  //ie.style.width = z_width + 'px';

  /*grid.style.width = z_width + 'px';
  grid.style.height = (z_height + (375.5 * w)) + 'px';

  rain.style.width = z_width + 'px';
  rain.style.height = (z_height + (375.5 * w)) + 'px';*/
};



/*///////月/////////*/
/*
   新月日計算
   引数  　julian  ユリウス通日
   戻り値  与えられたユリウス通日に対する直前の新月日(ユリウス日)
*/
function getNewMoon(julian) {
  var k     = Math.floor((julian - 2451550.09765) / 29.530589);
  var t     = k / 1236.85;
  var nmoon = 2451550.09765
             + 29.530589  * k
             +  0.0001337 * t * t
             -  0.40720   * Math.sin((201.5643 + 385.8169 * k) * 0.017453292519943)
             +  0.17241   * Math.sin((2.5534 +  29.1054 * k) * 0.017453292519943);
  return (nmoon);         // julian - nmoonが現在時刻の月齢
}

/*
    ユリウス通日計算
    引数　　時刻(Dateオブジェクト)
    戻り値　ユリウス通日(浮動小数点数)
*/
function getJulian(date) {
  return date.getTime() / 86400000.0+2440587.5;
}

/*
    0,1,2,3 ... を 00,01,02,03 ... に。
   （変な関数名だ）
*/
function maeZero(num){
  if (num < 10){
    return '0' + num;
  } else {
    return num;
  }
}


/*
    メイン処理
*/

var moonage;//月齢

var appName  = navigator.appName.charAt(0);
var appVer   = navigator.appVersion.charAt(0);

var nowDate   = new Date();

julian = getJulian(nowDate);

var nmoon = getNewMoon(julian);
// getNewMoonは新月直前の日を与えるとうまく計算できないのでその対処
// (一日前の日付で再計算してみる)
if (nmoon > julian) {
   nmoon = getNewMoon(julian - 1.0);
}

var age     = julian - nmoon;         // julian - nmoonが現在時刻の月齢

if(appName == "N" && appVer == "2") {
    moonage = age;
} else {
    moonage = new String(age);
}

// 月齢を表示用に編集（小数以下第一位まで表示）
// でもこんな回りくどいことをしなくてもいいような気が。。。。
if (age >= 0) {
  moonage = moonage + ".0";     // 小数部が0の時に備えた処理
  if (moonage.charAt(0) == ".") { // 整数部が飛ばされたときの処理
    moonage = "0" + moonage;
  }
  if(age >= 10) {
    moonage = moonage.substring(0,4);
  } else {
    moonage = moonage.substring(0,3);
  }
  console.log(moonage);
}
