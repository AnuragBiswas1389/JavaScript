
let high_score=0;
let high2=0;
let score=20;
let num = Math.trunc(Math.random() * 20) + 1;


document.querySelector(".btn_tryAgain").style.display = "none";

function displayMessage(message){
    document.querySelector(".hint").textContent=message;
    if(score>0){
    score--;
    setScore(String(score));
    }
}


const setScore = score=>document.querySelector(".curr_score").textContent=`Your current score is ${score}`;


function reStart() {
   
    
    document.querySelector(".input").style.display="none";
    document.querySelector(".btn_again").style.display="none";
    document.querySelector(".btn_tryAgain").style.display = "block";
  
}



document.querySelector(".btn_tryAgain").addEventListener('click', function again (){
    
    score=20;
    setScore(20);
    
    document.querySelector(".btn_tryAgain").style.display = "none";
    document.querySelector(".input").value="";
    document.querySelector(".hint").textContent="start guessing...";
    num = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".input").style.display = "block";
    document.querySelector(".btn_again").style.display="block";
    document.querySelector('body').style.backgroundColor = '#222';
    
});

document.querySelector(".btn_again").addEventListener('click', function check(){


    
    let guess = Number(document.querySelector('.input').value); 
    document.querySelector(".btn_tryAgain").style.display = "none";
   
    
    if(!guess) document.querySelector(".hint").textContent="enter a number";

    else if(guess!=num){
        
    if(score>0) {

            guess>num? displayMessage( "Your guess is too high") :displayMessage("Your guess is too low"); 
    }

        if(score==0){
            displayMessage("you lost");
            document.querySelector('body').style.backgroundColor = '#e87454';
            document.querySelector("#highScore").textContent="";
            reStart();
        }
        
    }else if(guess==num){
        displayMessage("correct answer");
        document.querySelector(".res").textContent=`Congratulation your answer is correct ${num}`;
        document.querySelector('body').style.backgroundColor = '#60b347';
        reStart();
        high2=score;
        if(high2>high_score){
            high_score=high2;
        }

        document.querySelector("#highScore").textContent=`Highest score is ${high_score}`;
    }




});

