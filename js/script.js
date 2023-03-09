var gameInstance = {
    attempts : 20,
    totalGold : 0,
}







$("#cave").click(cave); 
$("#house").click(house); 
$("#goldmine").click(goldMine); 
$("#casino").click(casino); 




function cave(){
    gameInstance.attempts--;
    $("#attempts").html(gameInstance.attempts);
    gameInstance.totalGold+=5;
    $("#gold").html(gameInstance.totalGold);
    $("#log").html("You have earned 5 gold coins!");
    console.log("You have earned 5 gold coins!");
}

function house(){
    gameInstance.attempts--;
    $("#attempts").html(gameInstance.attempts);
    let x = Math.floor(Math.random() * 100);
    if(x<=80){
        gameInstance.totalGold+=10;
        $("#gold").html(gameInstance.totalGold);
        $("#log").html("You have earned 10 gold coins!");
        console.log("You have earned 10 gold coins!");
    }
    else{
        $("#gold").html(gameInstance.totalGold);
        $("#log").html("You have earned 0 gold coins :<");
        console.log("You have earned 0 gold coins :<");
    }
}

function goldMine(){
    gameInstance.attempts--;
    $("#attempts").html(gameInstance.attempts);
    let y = Math.floor(Math.random() * 100);
    if(y<=80){
        let z = Math.floor(Math.random() * (25 - 1 + 1) + 1);
        gameInstance.totalGold+=z;
        $("#gold").html(gameInstance.totalGold);
        $("#log").html("You have earned " + z + " gold coins!");
        console.log("You have earned " + z + " gold coins!");
    }
    else{
        $("#gold").html(gameInstance.totalGold);
        $("#log").html("You have earned 0 gold coins :<");
        console.log("You have earned 0 gold coins :<");
    }
}

function casino(){
    
}