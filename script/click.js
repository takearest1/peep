/*
パソコン・TV・電気のスイッチ
をクリックした時の処理
*/

var p_flag = false;
var t_flag = false;
var s_flag = false;//false = 明るい
var dark = 100;
var imgwid;
var t_random = Math.floor(Math.random()* (8 - 1) + 1);
var curtain_dark = 0;

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

  $('.tv').click( function tv(){
    console.log(dark);
    if(g_flag == false){
      if(t_flag == false){
        channel();
        t_flag = true;
      }else{
        $('#t_monitor').html('<img src="images/t_off.png" class="tv dark" style="filter:britress(' + dark + ');">');
        t_flag = false;
        $('.tv').css('filter','brightness(' + dark + '%)');
      }
    }else if(g_flag == true){
      if(t_flag == false){
        $('#t_monitor').html('<img src="images/t_game.gif" class="tv">');
        t_flag = true;
      }else{
        $('#t_monitor').html('<img src="images/t_off.png" class="tv dark" style="filter:britress(' + dark + ');">');
        t_flag = false;
        $('.tv').css('filter','brightness(' + dark + '%)');
      }
    }
    console.log(dark);
  });

  $('#rimokon').click(function () {
    if(g_flag == false){
    t_random = t_random + 1;
    channel();
    t_flag = true;
    if(t_random == 8){
      $('#t_monitor').html('<img src="images/t_off.png" class="tv dark" style="filter:britress(' + dark + ');">');
      t_flag = false;
      $('.tv').css('filter','brightness(' + dark + '%)');
      t_flag = false;
    }else if(t_random == 9){
      t_random = 1;
      channel();
    };
  };
    console.log(t_random);
  });

  $('#switch').click(function () {
    if(s_flag == false){
      syoumei_off();
    }else{
      syoumei_on();
    }
  });

  var closet = false;
  $('.closet').click( function(){
    if(closet == false){
      $('.closet').attr('src', 'images/closet_open.gif');
      closet = true;
      console.log("open");
    }else{
      $('.closet').attr('src', 'images/closet_close.gif');
      closet = false;
      console.log("close");
    };
  });

  var curtain = false;
  $('#curtain').click( function(){
    if(curtain == false){
      $('#curtain').attr('src', 'images/curtain_close.gif');
      countDown();
      curtain_dark = 15;
      curtain = true;
      console.log("open");
    }else{
      $('#curtain').attr('src', 'images/curtain_open.gif');
      countUp();
      curtain_dark = 0;
      curtain = false;
      console.log("close");
    };
  });

  var help = false;
  $('#help_btn').click(function () {
    if(help == false){
      $('#help').fadeIn(300).css('display','block');
      help = true;
    }else{
      $('#help').fadeOut(300);
      help = false;
    }
  });


  var zoom_count = 5;

  $("#zoomin").click(function () {
    $("#zoomout").css('pointer-events','auto');
    imgwid = $("#container").width() + 100 ;
    $("#container").css({"width" : imgwid , "height" : imgwid});
    $("#grid , #rain").css({"min-width" : imgwid , "min-height" : imgwid + 64 });
    $("#ie , #zimen").css("min-width" , imgwid);
    $("#zimen").css("min-height" , imgwid - 311.5);

    $("#zoomout").removeAttr('style');
    zoom_count = zoom_count + 1;

    if(zoom_count == 10){$("#zoomin").css({'opacity':'0.3' , 'pointer-events':'none'});};
    if(zoom_count == 5){
      $("#container").removeAttr('style');
      $("#grid , #rain , #ie , #zimen").css({"min-width" : "" , "min-height" : "" });
    };
    console.log(zoom_count);
  });

  $("#zoomout").click(function () {
    $("#zoomin").css('pointer-events','auto');
    imgwid = $("#container").width() - 100 ;
    $("#container").css({"width" : imgwid , "height" : imgwid});
    $("#grid , #rain").css({"min-width" : imgwid , "min-height" : imgwid + 64 });
    $("#ie , #zimen").css("min-width" , imgwid);
    $("#zimen").css("min-height" , imgwid - 311.5);

    $("#zoomin").removeAttr('style');
    zoom_count = zoom_count - 1;

    if(zoom_count == 0){
      $("#zoomout").css({'opacity':'0.3' , 'pointer-events':'none'});
      $("#grid , #rain").css("min-height" , 463 );
    };
    if(zoom_count == 5){
      $("#container").removeAttr('style');
      $("#grid , #rain , #ie , #zimen").css({"min-width" : "" , "min-height" : "" });
    };
    console.log(zoom_count);
  });


});

function channel() {
  if(t_random == 1){
    $('#t_monitor').html('<img src="images/t_on.gif" class="tv">');
    $('#play').html('');
  }else if(t_random == 2){
    $('#t_monitor').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/ja5nlnwUHiQ?controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    $('#play').html('♪ 蛙の声と焚火<a href="https://youtu.be/ja5nlnwUHiQ" target="_blank">https://youtu.be/ja5nlnwUHiQ<i class="fas fa-external-link-alt"></i></a>');
  }else if(t_random == 3){
    $('#t_monitor').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/4AtJV7U3DlU?controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    $('#play').html('♪ FLYING OVER OAHU [4K] Hawaii Ambient Aerial Film + Music for Stress Relief - Honolulu to North Shore<a href="https://youtu.be/4AtJV7U3DlU" target="_blank">https://youtu.be/4AtJV7U3DlU<i class="fas fa-external-link-alt"></i></a>');
  }else if(t_random == 4){
    $('#t_monitor').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/OqY9Frh3t3I?controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    $('#play').html('♪ サルデーニャ島編 | 世界ねこ散歩～イタリア～ (アニマルプラネット)<a href="https://youtu.be/OqY9Frh3t3I" target="_blank">https://youtu.be/OqY9Frh3t3I<i class="fas fa-external-link-alt"></i></a>');
  }else if(t_random == 5){
    $('#t_monitor').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/48-RA4BNXVc?controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    $('#play').html('♪ 鴨が好き/ I like ducks<a href="https://youtu.be/48-RA4BNXVc" target="_blank">https://youtu.be/48-RA4BNXVc<i class="fas fa-external-link-alt"></i></a>');
  }else if(t_random == 6){
    $('#t_monitor').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/PrIwKj46I-Y?controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    $('#play').html('♪ 大量発生のウニ…廃棄野菜で“絶品”に変身　『the SOCIAL』傑作選（2019年11月19日放送より）<a href="https://youtu.be/PrIwKj46I-Y" target="_blank">https://youtu.be/PrIwKj46I-Y<i class="fas fa-external-link-alt"></i></a>');
  }else if(t_random == 7){
    $('#t_monitor').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/gZBh00N5Qp0?controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    $('#play').html('♪ レゴで作る日本の朝ごはん - ストップモーション料理 & ASMR<a href="https://youtu.be/gZBh00N5Qp0" target="_blank">https://youtu.be/gZBh00N5Qp0<i class="fas fa-external-link-alt"></i></a>');
  }
}

$(function() {
  $('#door').hover(function() {
    console.log("hover");

    //画像のsrc属性が別画像のパスに切り替わる
    $(this).attr('src', 'images/door_open.gif');

  //ここにはマウスを離したときの動作を記述
  }, function() {

    //画像のsrc属性を元の画像のパスに戻す
    $(this).attr('src', 'images/door_close.gif');

  });

})


function syoumei_on() {
  dark = 100  - curtain_dark;
  s_flag = false;
}

function syoumei_off() {
  if(6 <= th && th <= 11){
    dark = 75 - weather_dark - curtain_dark;
  }else if(12 <= th && th <= 16){
    dark = 85 - weather_dark - curtain_dark;
  }else if(17 <= th && th <= 18){
    dark = 65 - weather_dark - curtain_dark;
  }else{
    dark = 50 - weather_dark - curtain_dark;
  }
  //console.log(weather_dark);
  s_flag = true;
}


function countUp(){
	var countSpeed = 10;

		var self = $(this),
		countMax = 15,//ゴール
    thisCount = 0,
		countTimer;

		function timer(){
			countTimer = setInterval(function(){
				var countNext = thisCount++;//1ずつ数値が増えていく
        dark = dark + 1;
        console.log(thisCount);

				if(countNext == countMax){//現時点の数値とゴールの数値が一緒になった時に、
					clearInterval(countTimer);//カウントを停止（指定した関数のsetIntervalをストップさせる）
				}
			},countSpeed);
		}
		timer();

};

function countDown(){
	var countSpeed = 10;

		var self = $(this),
		countMax = 15,//ゴール
    thisCount = 0,
		countTimer;

		function timer(){
			countTimer = setInterval(function(){
				var countNext = thisCount++;//1ずつ数値が増えていく
        dark = dark - 1;
        console.log(thisCount);

				if(countNext == countMax){//現時点の数値とゴールの数値が一緒になった時に、
					clearInterval(countTimer);//カウントを停止（指定した関数のsetIntervalをストップさせる）
				}
			},countSpeed);
		}
		timer();

};
