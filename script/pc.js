/*
パソコンを動かす男の子の処理とPCの画面のオン
*/

var pc_f = false;
var pm;
//var yoru = document.getElementsByClassName("dark");

function pc(){
  if(pc_f == false){
    chara.innerHTML = '<img class="dark character" id="p_chara" src="images/pc.gif">';
    pm = document.getElementById('p_monitor');
    pm.innerHTML = '<img class="temae pc right" id="pc" src="images/p_on.gif">';
    $("#mouse").css('opacity', '0');
    pc_f = true;
    p_flag = true;
  }
}
