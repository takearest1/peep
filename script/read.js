/*
ベッドで本を読んでる
*/

var read_f = false;
//var yoru = document.getElementsByClassName("dark");

function read(){
  if(read_f == false){
    chara.innerHTML = '<img id="read" class="dark character" src="images/read.gif">';
    read_f = true;
    $("#book").css('opacity', '0');
    console.log("read");
  }

}
