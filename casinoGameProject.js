
let startingMoney = 1000


let userBetAmount = function() {
  return prompt(`You have ${startingMoney}, dollars how much do you want to bet?\n\n `);
  }

let betAmount = userBetAmount()
let userWallet = `You have ${startingMoney - betAmount} dollars left!`

console.log(userWallet) 

let userPromptChoice = function(){
    return prompt("\n\nHeads or Tails?\n\n ");
    }
    
    let choiceMade = userPromptChoice()
    
    
    
    
    let flipACoin = function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      let flip = Math.floor(Math.random() * (max - min) + min);
      if(flip == 1 ){
        let heads = flip
        return "\n  Heads"
      }else{
        let tails = flip
        return "\n  Tails"
      }
    
    
       
    }
    
    let postFlip = flipACoin(1,3)
    alert("It's" + postFlip)
    
    let test = function() {
      if(postFlip == choiceMade){
        console.log("You win!")
      }else if(postFlip != choiceMade){
        console.log("You lose!")
      }
    }
    test()
    
    
    // let winOrLoss = function(){
    //   if(choiceMade == postFlip){
    //     console.log("You Win")
    //   }else{
    //     console.log("You Lose")
    //   }
    
    // }
    
    // winOrLoss()
    
    // winOrLoss()
    
    
      
    
    