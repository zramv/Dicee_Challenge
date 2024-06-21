var title= document.querySelector("h1");
var roll = document.querySelector("button");
var playerOne= document.querySelector(".img1");
var playerTwo=  document.querySelector(".img2");
roll.addEventListener('click', onButtonClick);


function randomPlay(player){
    var randomNum=Math.floor((Math.random()*6)+1);
    switch(randomNum){
        case 1:{
            player.src="./images/dice1.png";
            return 1;
            break;
            
        }
        case 2:{
            player.src ='./images/dice2.png';
            return 2;
            break;
        }
        case 3:{
            player.src ='./images/dice3.png';
            return 3;
            break;
        }
        case 4:{
            player.src ='./images/dice4.png';
            return 4;
            break;
        }
        case 5:{
            player.src ='./images/dice5.png';
            return 5;
            break;
        }
        case 6:{
            player.src ='./images/dice6.png';
            return 6;
            break;
        }
    }
}

function onButtonClick() {
    var playerOneNum= randomPlay(playerOne);
    var playerTwoNum= randomPlay(playerTwo);
    if(playerTwoNum === playerOneNum)
        {
            title.textContent="Draw";
        }
    else if(playerOneNum > playerTwoNum )
        {      
            title.textContent="Player 1 win🎉";
        }
    else{
        title.textContent="Player 2 win🎉";
    }
}