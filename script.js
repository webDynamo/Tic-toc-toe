const playerName = document.querySelectorAll(".Player");
playerName.forEach(element => {
        element.addEventListener("click", (e) => {
            if (e.target.tagName === "INPUT") {
                e.target.style.outline = "1px solid red";
                e.target.style.border = "none";
            } else if (e.target.tagName === "BUTTON") {
                const input = e.currentTarget.querySelector("input");
                if (input) {
                    input.style.border = "1px solid black";
                    input.style.outline = "none";
                }
            }
        });
    });
const allBtn = document.querySelectorAll(".box");
let turn=false
allBtn.forEach((item) => {
        item.addEventListener("click", (e) => {
                const playerOne=document.getElementById("player_one").value;
                const playerTwo=document.getElementById("player_two").value;
                let isPlayerOne=false;
                let isPlayerTwo=false
                if(playerOne.length>0){
                        isPlayerOne=true
                }else{
                        alert("please enter first player name")
                        return null
                }
               
                if(playerTwo.length>0){
                        isPlayerTwo=true
                }else{
                        alert("please enter second player name")  
                        return null
                }
                

                if (e.target.tagName === "BUTTON") {
                        e.target.textContent = turn ? "O" : "X";
                        e.target.style.background = "cyan";
                        e.target.disabled = true; // Prevent further clicks
                     
                }
                turn=!turn
                const winner= getWinner()
                console.log("winner", winner)
                if(winner){
                const displayWinner=document.getElementById("winner_box");
                displayWinner.style.display="flex";
                const winnerS=document.getElementById("winner");
                winnerS.innerText=winner

              }
        });
    });  
const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
const getWinner=()=>{
        const data=Array.from(allBtn[0].children)
        console.log("data",data)
        for (let combo of winningCombinations) {
                let valA = data[combo[0]]?.textContent;
                let valB = data[combo[1]]?.textContent;
                let valC = data[combo[2]]?.textContent;
                if (valA !== "" && valA === valB && valA === valC) {
                       
                        return valA;
                    }
              }
    }
    const btn = document.getElementById("rest_game");
    btn.addEventListener("click", () => {
    location.reload();
    });

    document.getElementById("close").addEventListener("click",()=>{
        const displayWinner=document.getElementById("winner_box");
        displayWinner.style.display="none";
    })