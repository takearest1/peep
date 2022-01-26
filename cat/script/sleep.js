/*
ベッドで寝る・ベッドの布団の撤去・部屋の証明オフ
*/

var sleep_f = false;
//var yoru = document.getElementsByClassName("dark");

function sleep(){

  if(sleep_f == false){
    chara.innerHTML = '<img id="sleep" class="dark character" src="images/sleep.gif">';
    console.log(th);
    $('.dark').css('filter','brightness(' + dark + '%)');
    sleep_f = true;

    console.log('sleeping');
  }
  //
}

//<img id="sleep" class="dark" src="images/sleep.gif">//これを５行目に入れる
