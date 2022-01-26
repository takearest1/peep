/*
ベッドで本を読んでる
*/

var tower_f = false;
//var yoru = document.getElementsByClassName("dark");

function tower(){
  if(tower_f == false){
    chara.innerHTML = '<img id="tower_cat" class="dark character" src="images/tower.gif">';
    $('#tower').css('opacity','1');
    tower_f = true;
    console.log("tower");
  }

}
