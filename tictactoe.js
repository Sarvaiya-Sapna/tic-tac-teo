var flag = 1;
function btn1_row1_column1(id) {
    var sound = new Audio('mixkit-retro-arcade-casino-notification-211.wav');
        sound.play(); 
    var ele = document.getElementById(id);
    ele.classList.add("btn");
    if (flag == 1) { 
        document.getElementById(id).value = "X";
        document.getElementById(id).disabled = true;
        flag = 0;   
    }  
    else {  
        document.getElementById(id).value = "0";
        btn4=document.getElementById(id);
        btn4.classList.add('btn-4');
        document.getElementById(id).disabled = true;
        flag = 1; 
    } }  
function common() {      
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;  
    if (((b1 == 'X') && (b2 == 'X') && (b3 == 'X')) || ((b4 == 'X') && (b5 == 'X') && (b6 == 'X')) || ((b7 == 'X') && (b8 == 'X') && (b9 == 'X')) || ((b1 == 'X') && (b4 == 'X') && (b7 == 'X')) || ((b2 == 'X') && (b5 == 'X') && (b8 == 'X')) || ((b3 == 'X') && (b6 == 'X') && (b9 == 'X')) || ((b3 == 'X') && (b5 == 'X') && (b7 == 'X')) || ((b1 == 'X') && (b5 == 'X') && (b9 == 'X'))) {
        document.getElementById('winner').innerHTML = 'X is win...!!!';
        var sound = new Audio('\JKL83NH-video-game-win.mp3');
        sound.play();
        document.getElementById('gif').innerHTML = `<img src="https://tenor.com/view/tic-tac-well-done-gif-23763320.gif" height="200px" width="200px"></img>`;
        let dis = document.getElementsByClassName("btn1");
        for (let i = 0; i < 10; i++) {
            dis[i].style.pointerEvents = "none";
        }
    }  
    else if (((b1 == '0') && (b2 == '0') && (b3 == '0')) || ((b4 == '0') && (b5 == '0') && (b6 == '0')) || ((b7 == '0') && (b8 == '0') && (b9 == '0')) || ((b1 == '0') && (b4 == '0') && (b7 == '0')) || ((b2 == '0') && (b5 == '0') && (b8 == '0')) || ((b3 == '0') && (b6 == '0') && (b9 == '0')) || ((b3 == '0') && (b5 == '0') && (b7 == '0')) || ((b1 == '0') && (b5 == '0') && (b9 == '0'))) {
        document.getElementById('winner').innerHTML = '0 is win...!!!';
        var sound = new Audio('\JKL83NH-video-game-win.mp3');
        sound.play();
        document.getElementById('gif').innerHTML = `<img src="https://tenor.com/view/tic-tac-well-done-gif-23763320.gif" height="200px" width="200px"></img>`;
        let dis = document.getElementsByClassName("btn1");
        // console.log(disable);
        for (let i = 0; i < 10; i++) {
            dis[i].style.pointerEvents = "none";
        }
    } 
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X' || b2 == '0') && (b3 == 'X' || b3 == '0') && (b4 == 'X' || b4 == '0') && (b5 == 'X' || b5 == '0') && (b6 == 'X' || b6 == '0') && (b7 == 'X' || b7 == '0') && (b8 == 'X' || b8 == '0') && (b9 == 'X' || b9 == '0')) {
        document.getElementById('winner').innerHTML = "match tie!!!";
        var sound = new Audio('\mixkit-retro-arcade-game-over-470.wav');
        sound.play();
        document.getElementById('gif2').innerHTML = `<img src="https://media0.giphy.com/media/VL48WGMDjD64umCEkv/giphy.gif?cid=ecf05e47njr3vwlddl4b30b6kzkkf0aka6mgymohw0bglfiz&rid=giphy.gif" height="200px" width="200px"></img>`;
    }
}      
function grid(id) {
    var i = document.getElementById(id);
    i = document.getElementById('grid').style.backgroundImage = `url(${document.querySelector("#option-img").value}.jpg`;
    i = document.getElementById('grid').style.backgroundSize = 'cover';
}



