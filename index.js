var title= document.querySelector("h1");
var roll = document.querySelector("button");
var playerOne= document.querySelector(".img1");
var playerTwo=  document.querySelector(".img2");
roll.addEventListener('click', onButtonClick);


function randomPlay(player){
    var randomNum=Math.floor((Math.random()*6)+1);
    player.src="./images/"+"dice"+randomNum+".png";
    return randomNum;
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
