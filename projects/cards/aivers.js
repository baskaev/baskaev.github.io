let arr = [ 
    "sharp.png", 
    "c++.png", 
    "css.png", 
    "django.png", 
    "html.png", 
    "java-script.png", 
    "java.png", 
    "net.png", 
    "php.png", 
    "python.png", 
    "swift.png", 
    "typescript.png"
];

let arrDOM = new Array(16);
let arrRnd = new Array(16);
let fir = -1;
let sec = -1;
let board = document.querySelector(".board");
let path = "prog langs/";
let stop = document.querySelector(".stop");
let coins = 0;
let score = document.querySelector(".coins")
let cntMoves =0;
for(let i=0; i<16; i++){
    arrRnd[i]="";
}
for (let i = 0; i < 16; i+=2) {
    let className = (path + arr[getRandomArbitrary(0, 11)]);
    arrDOM[i] = document.createElement("img");
    arrDOM[i].class=className;
    arrDOM[i].style.width = "125px";
    arrDOM[i].style.height = "125px";
    arrDOM[i].src = "prog langs/default.jpg";
    arrRnd[freeOnBoard()] = { img: arrDOM[i], clicked: false };
    arrDOM[i+1] = document.createElement("img");
    arrDOM[i+1].class=className;
    arrDOM[i+1].style.width = "125px";
    arrDOM[i+1].style.height = "125px";
    arrDOM[i+1].src = "prog langs/default.jpg";
    arrRnd[freeOnBoard()] = { img: arrDOM[i+1], clicked: false };
}

arrRnd.forEach(function(item) {
    item.img.addEventListener("click", function() {
        if (!item.clicked) {
            item.img.src = item.img.class;
            item.clicked = true;

            if (fir === -1) {
                fir = item;
            } else if (sec === -1) {
                sec = item;
                cntMoves++;
                if (fir.img.class !== sec.img.class) {
                    setTimeout(function() {
                        fir.img.src = "prog langs/default.jpg";
                        sec.img.src = "prog langs/default.jpg";
                        fir.clicked = false;
                        sec.clicked = false;
                        sec = -1;
                        fir = -1;
                    }, 200);
                } else {
                    coins++;
                    score.textContent = "Баллов:"+coins;
                    sec = -1;
                    fir = -1;
                    if(coins==8){
                        board.parentNode.removeChild(board);
                        gameover=document.createElement("p");
                        gameover.style.width = "200px";
                        gameover.style.height = "50px";
                        gameover.textContent ="Вы выйграли за " + cntMoves + " ходов!";
                        gameover.style.marginLeft="40%";
                        gameover.style.marginTop="10%";
                        gameover.style.fontSize="20px";
                        gameover.style.border="5px solid green";
                        document.querySelector("body").appendChild(gameover);
                    }
                }
            }
        }
    });

    board.appendChild(item.img);
});
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function freeOnBoard(){
    let rnd = getRandomArbitrary(0,16);
    let cnt = 0;
    while(arrRnd[rnd]!=""){
        cnt++;
        rnd = getRandomArbitrary(0,16);
        if(cnt>1000){
            return 0;
        }
    }
    return rnd;
}
