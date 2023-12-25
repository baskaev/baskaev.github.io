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
]
let arrDOM = new Array(8);
let arrRnd = new Array(16);
let fir=-1;
let sec=-1;
let board = document.querySelector(".board");
let path = "prog langs/";
let stop = document.querySelector(".stop");
let coins = 0;

for(let i=0; i<16; i++){
    arrRnd[i] = "";
}
for(let i=0; i<8; i++){
    arrDOM[i] = "";
}
for (let i=0; i<8; i++){
    arrDOM[i]=document.createElement("img");
    arrDOM[i].class=path + arr[getRandomArbitrary(0,12)];
    arrDOM[i].style="width:100px; height:100px;"
    arrDOM[i].src="prog langs/default.jpg"
    arrRnd[freeOnBoard()] = arrDOM[i];
    arrRnd[freeOnBoard()] = arrDOM[i];
}
for(let i=0; i<16; i++){
    arrRnd[i].onclick = function(){
        if (fir==-1 && arrRnd[i].src=="prog langs/default.jpg"){
            fir=i;
            arrRnd[i].src = arrRnd[i].class;
        }
        else if(sec==-1 && arrRnd[i].src=="prog langs/default.jpg"){
            sec==i;
            arrRnd[i].src =arrRnd[i].class;
            if (arrRnd[fir].class != arrRnd[sec].class){
                arrRnd[fir].src = "prog langs/default.jpg";
                arrRnd[sec].src = "prog langs/default.jpg"
                sec =-1;
                fir =-1;
            }
            else{
                coins++;
            }
        }
    }
}
for(let i=0; i<16;i++){
    board.appendChild(arrRnd[i]);
}

function freeOnBoard(){
    let rnd = getRandomArbitrary(0,16);
    let cnt = 0;
    while(arrRnd[rnd]!=""){
        cnt++;
        rnd = getRandomArbitrary(0,16);
        if(cnt>1000){
            break;
        }
    }
    return rnd;
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

