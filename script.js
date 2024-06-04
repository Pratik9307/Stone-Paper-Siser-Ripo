let userscore=0;
let compscore=0;


const choices=document.querySelectorAll(".choice")
const ss=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");


const drawgame=()=>{
    ss.innerText=" Game Draw PlZ Try again !"   
};
const showwinner=(userwin,userchoice,compchoice) =>{
    if(userwin){
       userscore++;
       userscorepara.innerText=userscore;
        ss.innerText=`You Won ! your ${userchoice} beats ${compchoice}`;
        

    }else{
        compscore++;
        compscorepara.innerText=compscore
       
        ss.innerText = `You lose ! ${compchoice} beats your ${userchoice} `
        
    }
}



const computerchoice=()=>{
      const option=["rock","paper","scissors"];
      //rock paper scissors
      const randIdx=Math.floor(Math.random()*3);
      return option[randIdx];
}





const playgame=(userchoice)=>{
     console.log("user choice =",userchoice)
     // Generate computer choice;
     const compchoice=computerchoice();
     console.log("comp choice=",compchoice);

     if( userchoice==compchoice){
        // Draw Game
     }
     else{
        let userwin =true;
        if(userchoice=="rock"){
            // scissors ,paper
            userwin=compchoice==="paper" ? false: true;
        }else if(userchoice=="paper"){
            //rock,scissirs
            userwin=compchoice=="scissors" ? false : true;
        }else  {
            //rock, paper
          userwin=compchoice==="rock" ? false :true;
            
        }
        showwinner(userwin,userchoice,compchoice);
     }

};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice =choice.getAttribute("id")
        playgame(userchoice);
    })
})