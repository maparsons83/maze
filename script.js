// var boxTop = 200;
// var boxleft = 200;
currentPos = '90';

var map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];

// create array of blocks 
function draw() {
    var main = document.querySelector("main");


    for (let i = 0; i < map.length; i++) {
        var newRow = document.createElement("div");
        newRow.className = ("flexbox");
        main.appendChild(newRow);

        for (let j = 0; j < map[i].length; j++) {
            let cell = map[i][j];

            if (cell === "W") {
                var newCol = document.createElement("div");
                newCol.className = ("wall");
                newRow.appendChild(newCol);

            } else if (cell === " ") {
                var newCol = document.createElement("div");
                newCol.className = ("empty");
                newRow.appendChild(newCol);
            } else if (cell === "S") {
                var newCol = document.createElement("div");
                newCol.id = ("start");
                let start = document.getElementById("start");
                newRow.appendChild(newCol);

            } else if (cell === "F") {
                var newCol = document.createElement("div");
                newCol.className = ("finish");
                newRow.appendChild(newCol);
            }
        }
    }
    // console.log(main);

}

document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (keyName == "ArrowRight") {

        for (let i = 0; i < map.length; i++) {

            if (map[i].includes("S")) {
                playerPos = map[i].indexOf("S");
                
                
            }



        }
    }

});

draw();





// for (let j = 0; j < map[i].length; j++) {
//     let cell = map[i][j];

//     if (cell === "S") {
//         cell = cell[i][j + 1];


//     }