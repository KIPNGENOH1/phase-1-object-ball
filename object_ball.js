function gameObject () {
return{
    home: {
        teamName: "brooklyn Nets",
        colors: ["Black","White"]
        players: {
            "Alan Anderson": {
                Number: 0,
                shoe: 16,
                points: 22,
                resbounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slumdunks: 1,
            }
            "Reggie Evans": {
                Number: 30,
                shoe: 14,
                points: 12,
                resbounds: 12,
                assists: 12,
                steals: 12         ,
                blocks: 12,
                slumdunks: 7,
            }
            "Brook Lopez": {
                Number: 11,
                shoe: 17,
                points: 17,
                resbounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slumdunks: 15,
            }
            "Mason Plumlee": {
                Number: 1,
                shoe: 19,
                points: 26,
                resbounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slumdunks: 5,
            }
            "Jason Terry": {
                Number: 31,
                shoe: 15,
                points: 19,
                resbounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slumdunks: 1,
            }
        }        
    Away: { 
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"]
        players: {
            "Jeff Adrien": {
                Number: 4,
                shoe: 18,
                points: 10,
                resbounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slumdunks: 2,
            }
            "Bismak Biyombo": {
                Number: 0,
                shoe: 16,
                points: 12,
                resbounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slumdunks: 10,
            }
            "DeSagna Diop": {
                Number: 2,
                shoe: 14,
                points: 24,
                resbounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slumdunks: 5,
            }
            "Ben Gordon": {
                Number: 8,
                shoe: 15,
                points: 33,
                resbounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slumdunks: 0,
            }
            "Brendan Haywood": {
                Number: 33,
                shoe: 15,
                points: 6,
                resbounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slumdunks: 12,
            }
        }
    }
}
console.log(gameobject())
function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
  }
  console.log(hometeamName());

function awayteamName(){
    return gameobject().away.teamName
}
console.log(awayTeamName())
//PLAYER POINTS
function numPointsScored(playerName) {
    return gameObject().away.players[playerName].points
}
console.log(numPointsScored("Bismark Biyombo"))  

function playerStats(playerName){
    return gameObject().home.players[playerName]
}
console.log(playerStats("Ben Gordon"))

function shoeSize(playerName) {
    return playerStats(playerName).shoe
}
console,log(shoeSize("Ben Gordon"))

//PLAYER POINTS
function numPointsScored(playerName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName].points;
        }
    }
}
console.log(numPointsScored("Ben Gordon"))

function teamcolors(teamName){
    for (let team in gameObject()) {
        if (gameObject()[team].teamName === teamName) {
            return gameObject()[team].colors;
        }
    }
}
console.log(teamcolors("Brooklyn Nets"))

function teamName() {
    return[gameObject().home.teamName, gameObject().away.teamName]
}
console.log(teamName())

function playerNumbers(teamName) {
    consta team = gameObject().home.teamName === teamName ? gameObject()
    const Number = [];
    for (let player in team.players) {
        Numbers.push(team.players[player].Number);
    }
    return Numbers;
}
console.log(playerNumbers("Brooklyn Nets"))

function playerStats(playerName) {
    return gameObject().home.players[playerName] 
}
console.log(playerNumbers("Ben Gordon"))

function bigShoeRebounds() {
    let playerBiggestShoe = {shoe: 0 };
    for (let player in gameobject()) {
        for (let player in gameobject()[team].players) {
            if (gameObject()[team].players[player].shoe > playerBiggestShoe)
                playerBiggestShoe = gameObject()[team].players[player];
        }
    }
    return playerBiggestShoe.resbounds;
}
console.log(bigShoeRebounds())

function mostPointsScored() {
    let gameData = gameObject();
    let maxpoints = 0;
}

function mostPointsScored() {
    let playerMostPoints = { points: 0 };
    for (let team in gameObject()) {
        for (let player in gameObject()[team].players) {
            if (gameObject()[team].players[player].points > playerMostPoints.points) {
                playerMostPoints = gameObject()[team].players[player];
            }
        }
    }
    return playerMostPoints;
}
console.log(mostPointsScored())

function winningTeam(){
    const homePoints = object.values(gameObject().home.players).reduce((acc, playerMostPoints))
    const awayPoints = object.values(gameObject().away.players).reduce((acc, playerMostPoints))
    return homePoints > awayPoints ? gameObject().home.teamName : gameObject().awayPoints
}
console.log(winningTeam())

function doesLongNameStealAton() {
    let playerMostSteals = { steals: 0 };
    for (let team in gameObject()) {
        for (let player in gameObject()[team].players) {
            if (gameObject()[team].players[player].points > playerMostSteals.steals) {
                playerMostPoints = gameObject()[team].players[player];
            }
        }
        return playerMostSteals.steals > 10;
    }
   console.log(doesLongNameStealAton())
}