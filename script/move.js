@font-face {
  font-family: "HuiFont";
  src: url("font/HuiFont29.eot?") format('eot'),
       url("font/HuiFont29.woff") format('woff');
}

*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  outline: none;
  pointer-events: none;
  cursor: url(images/cursor.png)6 6,auto;
  font-family: "HuiFont";
}

.hover{
  text-align: center;
  cursor: url(images/hover.png)13 13,auto;
}

body　div{
  pointer-events: auto;
}

#container{
  width: 100%;
  max-width: 1280px;
  min-width: 512px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', sans-serif;
}

/*//////初期設定////*/
#image{
  position: relative;
  margin: 0 auto;
  width: 93vh;
  height: 93vh;
}

img{
  margin-top:2rem;
  position: absolute;
}

#hoge{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
}

@media only screen and (max-width: 960px) {
  #image{
    height: 800px;
    width: 800px;
  }
}

@media only screen and (max-height: 900px) {
  #image{
    height: 800px;
    width: 800px;
  }

  body{
    padding-bottom: 4rem;
  }
}

/*///////背景//////*/
#house{
  width: 100%;
}

#ie{
  position: absolute;
  background-image: url(images/ie.png);
  width: 100%;
  height: 175.5px;
  background-size: 293.5px,175.5px;
  top:200px;
  transform: translate(0, 0);
  left: 0;
}

#zimen{
  position: absolute;
  top:375.5px;
  width: 100%;
  height: 100px;
  background-color: #fff;

  left: 0;
}

#title{
  width: 13.5%;
  top:9%;
  left: 14%;
}

.sora{
  width: 71px;
  left:84%;
  top : 6%;
}

.window{
  width: 21.5%;
  left:64%;
  top:19%;
}

#curtain{
  pointer-events: auto;
}

#reload{
  width: 8%;
  top:86%;
  left: 1%;
  pointer-events:auto;
}

#reload:hover{
  transition: all 0.3s;
  opacity: 0.5;
}

#help_btn{
  width: 8%;
  top:86%;
  left: 10%;
  pointer-events:auto;
}

#help_btn:hover{
  transition: all 0.3s;
  opacity: 0.5;
}

#play{
  position: absolute;
  top:102%;
  left:2%;
  color: #fafafa;
  pointer-events: auto;
}

#play a{
  opacity: 0.7;
  font-size: 13px;
  margin-left: 1rem;
  color: #fafafa;
  pointer-events: auto;
}

#play a i{
  margin-left: 0.2rem;
}

#play a:hover{
  opacity: 0.9;
}

#clock img{
  width: 19%;
  top:78%;
  left: 73%;
  opacity: 0.8;
}

#grid{
  position: absolute;
  background-image: url(images/grid.png);
  background-size: 55.5px,33px;
  left: 0px;
}

#rain{
  position: absolute;
  background-size: 100px;
  left: 0px;
}

.zoom{
  width: 30px;
  z-index: 100;
  position: fixed;
  top: 30px;
  pointer-events: auto;
}

#zoomin{
  right: 70px;
}

#zoomout{
  right: 30px;
}

@media only screen and (min-width: 960px) {

  #ie{
    height: 210.6px;
    background-size: 352.2px,210.6px;
    top:240px;
  }

  #zimen{
    top:450.6px;
  }
}

@media only screen and (max-width: 800px) {/*////スマホ用/////*/

  #title{
    position: fixed;
    top: 30px;
    left: 30px;
    width: 80px;
    z-index: 10;
  }

  #clock img{
    position: fixed;
    width: 80px;
    top:auto;
    bottom:20px;
    left: auto;
    right: 20px;
    z-index: 10;
    opacity: 1;
  }

  #reload{
    width: 45px;
    position: fixed;
    left: 20px;
    top: auto;
    bottom: 20px;
    z-index: 10;
  }

  #help_btn{
    width: 45px;
    position: fixed;
    left: 75px;
    top: auto;
    bottom: 20px;
    z-index: 10;
  }

}





/*//////手前の家具///////*/
.temae{
  z-index: 1;
}

#door{
  width: 12.7%;
  top: 29.3%;
  left: 8.5%;
  pointer-events: auto;
}

.closet{
  width: 24.8%;
  top: 8.2%;
  left: 38%;
  pointer-events: auto;
}

.seat{
  width: 16%;
  left : 50.5%;
  top : 69%;
}

.pc{
  width: 9%;
  top: 63%;
  left: 45.5%;
  pointer-events:auto;
}

#table{
  width: 25%;
  top: 59%;
  left: 37%;
}

#mouse{
  width: 2.3%;
  top : 66%;
  left:53.5%;
}

.tv{
  width: 10.5%;
  top:43.5%;
  left: 26%;
  pointer-events:auto;
}

iframe{
  position: absolute;
  transform: scaleY(1.3) skewY(-22.5deg);
  width: 9.5%;
  height: 7%;
  top: 50.7%;
  left: 26.5%;
}

#switch{
  width: 2%;
  top:42%;
  left:23%;
  pointer-events:auto;
}

#futon{
  width: 33%;
  top:42.5%;
  left:55%;
}

#bed{
  width: 43.6%;
  top: 42.5%;
  left: 52.8%;
}

#book{
  width: 5.1%;
  top: 55%;
  left: 86%;
}

#game_rimokon{
  width: 4.1%;
  top: 68%;
  left: 41.5%;
}

#rimokon{
  width: 4.6%;
  top: 63.5%;
  left: 53%;
}


/*//////キャラ//////*/
#character1 {
    width: 8%;
    opacity: 0;
}

#character {
    width: 8%;
    opacity: 1;
}

#p_chara{
  width: 14%;
  z-index: 1;
  pointer-events: none;
  top: 60%;
  left: 49%;
}

#pc_up{
  width: 14.9%;
  top: 52.5%;
  left: 48.1%;
  z-index: 1;
}

#pc_down{
  width: 18.2%;
  top: 45%;
  left: 48.7%;
  z-index: 1;

}

#read{
  width: 20.5%;
  left: 66%;
  top:46.5%;
}

#read_up{
  width: 24.7%;
  top: 40%;
  left: 66.5%;
}

#read_down{
  width: 25%;
  top: 39.7%;
  left: 66%;
}

#sleep{
  width: 31%;
  top: 44%;
  left:57%;
}

#sleep_up{
  width: 32.8%;
  top: 40%;
  left:55%;
}

#sleep_down{
  width: 32.8%;
  top: 40.1%;
  left:55.2%;
}

#g_chara{
  width: 15%;
  top: 63%;
  left: 48.5%;
  z-index: 1;
}

#game_up{
  width: 22%;
  top: 52%;
  left: 41.5%;
  z-index: 1;
}

#game_down{
  width: 24.2%;
  top: 45.7%;
  left: 41.5%;
  z-index: 1;
}

#sumaho{
  width: 12%;
  top:46.5%;
  left: 69%;
}

#sumaho_up{
  width: 13.1%;
  top:41%;
  left: 67.5%;
}

#sumaho_down{
  width: 18.1%;
  top:43.3%;
  left: 66.7%;
}

#syomei{
  width: 8.3%;
  top: 42%;
  left: 18%;
}

/*@media only screen and (min-width: 960px) {
  #character1 {
      width: 79.2px;
  }

  #character {
    width: 79.2px;
  }

  #read{
    width: 195.6px;
    left: 636px;
    top:444px;
  }

  #sleep{
    width: 295.8px;
    left: 546px;
    top:462px;
  }

  #g_chara{
    width: 144px;
    top: 654px;
    left: 480px;
  }

  #sumaho{
    width: 115.2px;
    top:444px;
    left: 660px;
  }
}*/


/*//////ヘルプ///////*/
#container2{
  position: absolute;
  width: 100%;
  max-width: 1280px;
  min-width: 512px;
  top: 0;
}

#help{
  padding-top: 2rem;
  position: relative;
  margin: 0 auto;
  width: 800px;
  height: 800px;
  padding-bottom: 50px;
  margin: 0 auto;

  display: none;
  z-index: 9;
}

#h_bg{
  position: relative;
  width: 100%;
  height: auto;
}

@media only screen and (min-width: 960px) {
  #help{
    height: 93vh;
    width: 93vh;
  }
}

#help div{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top:25%;
}

#help p{
  text-align: center;
  z-index: 1;
  color: #fff;
  margin-bottom: 1.5rem;
  line-height: 1.5rem;
  white-space: nowrap;
}

#help #toha{
  padding-left: 120px;
  margin-bottom: 8%;
}

#h_title{
  position: absolute;
  width: 70px;
  left: 45%;
  top: 23%;
}

#h_hover{
  width: 200px;
  left: 50%;
  top: 68%;
  transform: translateX(-40%);
}
