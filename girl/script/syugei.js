/*
ベッドで本を読んでる
*/

var syugei_f = false;
//var yoru = document.getElementsByClassName("dark");
var g_flag = false;//バグを潰すようフラグ

function syugei(){
  if(syugei_f == false){
    chara.innerHTML = '<img id="syugei" class="dark character" src="images/syugei.gif">';
    $('#cloth').css('opacity','0');
    syugei_f = true;
  }
}
