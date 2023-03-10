var gameInstance = {
    attempts : 0,
    totalGold : 0,
}

var gameLog = {
    events: [],
    time: [],
    amount: [],
    gains: [],
    losses: []
}


let gainSum = 0;
let lossesSum = 0;


$("#next").click(next); 
$("#reset").click(reset); 
$("#cave").click(cave); 
$("#house").click(house); 
$("#goldmine").click(goldMine); 
$("#casino").click(casino); 

function reset(){
    location.reload();
}
function next(){

    for (let i = 0; i < gameLog.gains.length; i++){
        gainSum += gameLog.gains[i];
    }

    $("#totalGains").html(gainSum);

    populateTableGains();
    $(document).ready(function(){
        $("#lossGainsTable").modal('show');
    });

    for (let i = 0; i < gameLog.losses.length; i++){
        lossesSum += gameLog.losses[i];
    }

    $("#totalLosses").html(lossesSum);

    populateTableLoss();
    $(document).ready(function(){
        $("#lossGainsTable").modal('show');
    });


    
    
}

function cave(){
    gameInstance.attempts++;
    $("#attempts").html(gameInstance.attempts);
    gameInstance.totalGold+=5;
    $("#gold").html(gameInstance.totalGold);
    $("#log").html("You earned 5 gold coins!");
    console.log("You earned 5 gold coins!");
    console.log(gameInstance.events);
    const d = new Date();
    let t = new Date().toLocaleTimeString();
    gameLog.time.push(t);
    gameLog.events.push("CAVE");
    gameLog.amount.push("+ " + 5);
    gameLog.gains.push(5);
    console.log(gameLog.time);
    console.log(gameLog.events);
    console.log(gameLog.amount);
    gameOver();

}

function house(){
    gameInstance.attempts++;
    $("#attempts").html(gameInstance.attempts);
    let x = Math.floor(Math.random() * 100);
    if(x < 80){
        gameInstance.totalGold += 10;
        $("#gold").html(gameInstance.totalGold);
        $("#log").html("You earned 10 gold coins!");
        console.log("You earned 10 gold coins!");
        const d = new Date();
        let t = new Date().toLocaleTimeString();
        gameLog.time.push(t);
        gameLog.events.push("HOUSE");
        gameLog.amount.push("+ " + 10);
        gameLog.gains.push(10);
        console.log(gameLog.time);
    console.log(gameLog.events);
    console.log(gameLog.amount);
    

    }
    else{
        $("#gold").html(gameInstance.totalGold);
        $("#log").html("You earned 0 gold coins :<");
        console.log("You earned 0 gold coins :<");
        const d = new Date();
        let t = new Date().toLocaleTimeString();
        gameLog.time.push(t);
        gameLog.events.push("HOUSE");
        gameLog.amount.push("+ " + 0);
        console.log(gameLog.time);
        console.log(gameLog.events);
        console.log(gameLog.amount);
    

    }
    gameOver();
}

function goldMine(){
    gameInstance.attempts++;
    $("#attempts").html(gameInstance.attempts);
    let x = Math.floor(Math.random() * 100);
    if(x < 80){
        let y = Math.floor(Math.random() * (25 - 1 + 1) + 1);
        gameInstance.totalGold += y;
        $("#gold").html(gameInstance.totalGold);
        $("#log").html("You earned " + y + " gold coins!");
        console.log("You earned " + y + " gold coins!");
        const d = new Date();
        let t = new Date().toLocaleTimeString();
        gameLog.time.push(t);
        gameLog.events.push("GOLD MINE");
        gameLog.amount.push("+ " + y);
        gameLog.gains.push(y);
        console.log(gameLog.time);
        console.log(gameLog.events);
        console.log(gameLog.amount);

    }
    else{
        $("#gold").html(gameInstance.totalGold);
        $("#log").html("You earned 0 gold coins :<");
        console.log("You earned 0 gold coins :<");
        const d = new Date();
        let t = new Date().toLocaleTimeString();
        gameLog.time.push(t);
        gameLog.events.push("GOLD MINE");
        gameLog.amount.push("+ " + 0);
        console.log(gameLog.time);
    console.log(gameLog.events);
    console.log(gameLog.amount);

    }
    gameOver();

}

function casino(){
    gameInstance.attempts++;
    $("#attempts").html(gameInstance.attempts);
    let x = Math.floor(Math.random() * 100);
    if(x < 50){
        console.log(x);
        let z = Math.floor(Math.random() * (50 - 40) + 40);
        console.log(z);
        gameInstance.totalGold += z;
        $("#gold").html(gameInstance.totalGold);
        $("#log").html("You earned " + z + " gold coins!");
        console.log("You earned " + z + " gold coins!");
        const d = new Date();
        let t = new Date().toLocaleTimeString();
        gameLog.time.push(t);
        gameLog.events.push("CASINO");
        gameLog.amount.push("+ " + z);
        gameLog.gains.push(z);
        console.log(gameLog.time);
        console.log(gameLog.events);
        console.log(gameLog.amount);

    }
    else{
        console.log(x);
        let z = Math.floor(Math.random() * (50 - 40) + 40);
        console.log(z);
        gameInstance.totalGold -= z;
        $("#gold").html(gameInstance.totalGold);
        $("#log").html("You lost " + z + " gold coins :<");
        console.log("You lost " + z + " gold coins :<");
        const d = new Date();
        let t = new Date().toLocaleTimeString();
        gameLog.time.push(t);
        gameLog.events.push("CASINO");
        gameLog.amount.push("- " + z);
        gameLog.losses.push(z);
        console.log(gameLog.time);
    console.log(gameLog.events);
    console.log(gameLog.amount);
    }
    gameOver();
}








function populateTableAll() {
    let table = document.getElementById('myTable1');

    for (let i = 0; i < gameLog.amount.length; i++) {
      let row = table.insertRow(i + 1);
      let timeCell = row.insertCell(0);
      let eventsCell = row.insertCell(1);
      let amountCell = row.insertCell(2);

      timeCell.innerHTML = gameLog.time[i];
      eventsCell.innerHTML = gameLog.events[i];
      amountCell.innerHTML = gameLog.amount[i];
    }
  }

  function populateTableGains() {
    let table = document.getElementById('myTable2');

    for (let i = 0; i < gameLog.gains.length; i++) {
      let row = table.insertRow(i + 1);
      let amountCell = row.insertCell(0);
      amountCell.innerHTML = gameLog.gains[i];
      
  }
}

function populateTableLoss() {
    let table = document.getElementById('myTable3');

    for (let i = 0; i < gameLog.losses.length; i++) {
      let row = table.insertRow(i + 1);
      let amountCell = row.insertCell(0);
      amountCell.innerHTML = gameLog.losses[i];
      
  }
}



  function gameOver() {
    if (gameInstance.totalGold >= 250) {
        populateTableAll();
        $(document).ready(function(){
            $("#allTable").modal('show');
        });
        $("#logTitle").html("You Win!");
        $("#goldEarned").html(gameInstance.totalGold);
        
        
    }
    else if (gameInstance.attempts >= 20 && gameInstance.totalGold < 250) {
        populateTableAll();
        $(document).ready(function(){
            $("#allTable").modal('show');
        });
        $("#logTitle").html("You Lose!");
        $("#goldEarned").html(gameInstance.totalGold);
        
        
    } else if (gameInstance.attempts == 20 && gameInstance.totalGold >= 250) {
        populateTableAll();
        $(document).ready(function(){
            $("#allTable").modal('show');
        });
        $("#logTitle").html("You Win!");
        $("#goldEarned").html(gameInstance.totalGold);
        
        
    }}
    