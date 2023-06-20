let score=JSON.parse(localStorage.getItem('score'))||{
    win:0,
    lose:0,
    tie:0
};

document.querySelector('.js-score').innerHTML=`Wins:${score.win} Loses:${score.lose} Ties:${score.tie}`;

function playGame(playerMove){
const computerMove=pickComputerMove();
let result='';
if(playerMove==='rock'){
    if(computerMove==='rock'){
        result='Tie';
    }
    else if(computerMove==='paper'){
        result='You lose';
    }
    else if(computerMove==='scissors')
    {
        result='You win';
    }   
}

else if(playerMove==='paper'){
    if(computerMove==='paper')
    result='Tie'
    else if(computerMove==='scissors')
    result='You lose';
    else if(computerMove==='rock')
    result='You win';
}

else{
    if(computerMove==='scissors')
            result='Tie'
    else if(computerMove==='rock')
            result='You lose';
    else if(computerMove==='paper')
            result='You win';
}
if(result==='You win'){
    score.win+=1;
}
else if(result==='You lose'){
    score.lose+=1;
}
else{
    score.tie+=1;
}


localStorage.setItem('score',JSON.stringify(score));


updateScore();

document.querySelector('.js-result').innerHTML=result;

document.querySelector('.js-moves').innerHTML=`You <img src="images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;

}


function updateMove(){
documnet.queryselector('.js-moves').innerHTML=`You ${playerMove} - ${computerMove} Computer`;
}
function updateResult(){
documnet.querySelector('.js-result').innerHTML=result;
}
function updateScore(){

document.querySelector('.js-score').innerHTML=`Wins:${score.win} Loses:${score.lose} Ties:${score.tie}`;
}
function pickComputerMove(){
const randomNumber=Math.random();
    let computerMove='';
    if(0<=randomNumber && randomNumber < 1/3)
        computerMove='rock';
    else if(1/3<=randomNumber && randomNumber<2/3)
        computerMove='paper';
    else if(2/3<=randomNumber && randomNumber<=1) 
        computerMove='scissors';

        console.log(computerMove);
        return computerMove;
}