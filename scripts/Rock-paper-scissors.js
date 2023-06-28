const score=JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    loose:0,
    ties:0
};
updateScore();
let intervalId;
let play=false;
function autoPlay(){
    if(!play){
        intervalId=setInterval(function(){
        let playermove=pickComputerMove();
        playGame(playermove);
},2000);
        play=true;
}
else{
    clearInterval(intervalId);
    play=false;
}

}
document.querySelector('.js-reset-button').addEventListener('click',()=>{
    document.querySelector('.name').innerHTML= `<p>Are you sure you want to reset the score?<button class="yes-bt">Yes</button><button class="no-bt">No</button></p>`;
    document.querySelector('.yes-bt').addEventListener('click',()=>{
        score.wins=0;
        score.loose=0;
        score.ties=0;
        updateScore();
        localStorage.removeItem('score');
        document.querySelector('.name').innerHTML=' ';
        
    });
    document.querySelector('.no-bt').addEventListener('click',()=>{
        document.querySelector('.name').innerHTML=' ';
    })
    
    }
);
document.querySelector('.js-autoplay-button').addEventListener('click',()=>{
    autoPlay();
})
document.querySelector('.js-rock-button').addEventListener('click',()=>{
    playGame('rock');
});
document.querySelector('.js-paper-button').addEventListener('click',()=>{
    playGame('paper');
});
document.querySelector('.js-scissors-button').addEventListener('click',()=>{
    playGame('scissors');
});
document.body.addEventListener('keydown',(event)=>{
    if(event.key==='a'){
        autoPlay()
    }
});
document.body.addEventListener('keydown',(event)=>{
          if(event.key==='Backspace'){
        score.wins=0;
        score.loose=0;
        score.ties=0;
        updateScore();
        localStorage.removeItem('score');
          }
});
document.body.addEventListener('keydown',(event)=>{
    if(event.key==='r' ){
        playGame('rock');
    }
    else if(event.key==='p' ){
        playGame('paper');
    }
    else if(event.key==='s'){
        playGame('scissors')
    }
})
function playGame(playermove){
    const computerMove=pickComputerMove();
     let result='';
     if(playermove==='rock'){
        if(computerMove==='rock')
            result='Tie';
        else if(computerMove==='paper')
            result='You lose';
        else if(computerMove==='scissors')
            result='You win';
     }
     else if(playermove==='paper'){
        if(computerMove==='paper')
            result='Tie';
        else if(computerMove==='scissors')
            result='You lose';
        else if(computerMove==='rock')
            result='You win';
     }
     else if(playermove==='scissors'){
        if(computerMove==='scissors')
            result='Tie';
        else if(computerMove==='rock')
            result='You lose';
        else if(computerMove==='paper')
            result='You win';

     }
     if(result==='You win')
     score.wins+=1;
     else if(result==='You lose')
     score.loose+=1;
     else if(result==='Tie')
     score.ties+=1;
     localStorage.setItem('score',JSON.stringify(score));
     updateScore();
     document.querySelector('.js-result').innerHTML=`${result}.`;
     document.querySelector('.js-moves').innerHTML=`You <img src="images/${playermove}-emoji.png" class="move-icon">  <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
     
 

}
function updateScore(){
    document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Looses: ${score.loose}, Ties: ${score.ties}`
}
function pickComputerMove(){
const randomNumber=Math.random();
 let computerMove='';
 if(randomNumber>=0 && randomNumber<1/3)
 computerMove='rock';
 else if(randomNumber>=1/3 && randomNumber<2/3)
 computerMove='paper';
 else if(randomNumber>=2/3 && randomNumber<1)
 computerMove='scissors';

 return computerMove;
}
