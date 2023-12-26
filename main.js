let resultArea = document.getElementById("result-area");
let chanceArea = document.getElementById("chances-area");
let userInput = document.getElementById("user-input");
let playButton = document.getElementById("play-button");
let resetButton = document.getElementById("reset-button");
let computerNum = 0;
let chances = 5;
let gameOver = false;
let history = [];


playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",function(){
    userInput="";
})



function pickRandomNumber(){
   let computerNum = Math.floor(Math.random()*100 + 1);
   console.log(computerNum);
}

function play(){
   let userValue = userInput.value;
   if(userValue<1||userValue>100){
    resultArea.textContent = "1과 100사이 숫자를 입력해주세요";
    return;
   }
   if(history.includes(userValue)){
    resultArea.textContent = "이미 입력한 숫자입니다."
    return;
   }
   chances--;
   chanceArea.textContent=`남은 기회: ${chances}`

   history.push(userValue);

   if(userValue < computerNum){
    resultArea.textContent = "UP";
   }else if(userValue > computerNum){
    resultArea.textContent = "DOWN"; 
   }else{
    resultArea.textContent = "정답!!";
    gameOver=true;
   }

   if(chances<1){
    gameOver=true;
   }
   if(gameOver == true){
    playButton.disabled = true;
   }

}

function reset(){
    userInput.value="";
    pickRandomNumber();
    chances = 5;
    chanceArea.textContent = `남은 기회: ${chances}`

}

pickRandomNumber();