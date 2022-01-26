/*
ベッドで本を読んでる
*/

var jarasi_f = false;
//var yoru = document.getElementsByClassName("dark");

function jarasi(){
  if(jarasi_f == false){
    chara.innerHTML = '<img id="jarasi_cat" class="dark character" src="images/jarasi.gif">';
    jarasi_f = true;
    $("#jarasi").css('opacity', '0');
    console.log("jarasi");
  }

}
