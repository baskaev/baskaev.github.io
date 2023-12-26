class product{
    name;
    category;
    height;
    footsize;
    constructor(name, category, height, footsize){
        this.name=name;
        this.category=category;
        this.height=height;
        this.footsize=footsize;
    }
}

let ctlg=new Array(10);
ctlg[0]=new product('1', 'кросcовки', '0', '35' );
ctlg[1]=new product('2', 'кросcовки', '0', '35' );
ctlg[2]=new product('3', 'кросcовки', '0', '36' );
ctlg[3]=new product('4', 'кросcовки', '0', '36');
ctlg[4]=new product('5', 'кросcовки', '0', '37' );
ctlg[5]=new product('6', 'кросcовки', '0', '37' );
ctlg[6]=new product('7', 'верх', '185', '0');
ctlg[7]=new product('8', 'верх', '185', '0');
ctlg[8]=new product('9', 'верх', '185', '0');
ctlg[9]=new product('10', 'верх', '185', '0');

let userList;

user = new product('0', '0', '0', '0');
let userJSON;
let storedUserJSON;
let storedUser;
let path = "res/";
let GridList = document.getElementById('grid-list');
storedUserJSON = localStorage.getItem('user');
if(storedUserJSON!=null){
    storedUser = JSON.parse(storedUserJSON);
    userList = [];
    for(let i=0; i<10; i++){
        if (ctlg[i].category == "верх" && ctlg[i].height == storedUser.height){
            userList.push(ctlg[i]);
        }
        if (ctlg[i].category == "кросcовки" && ctlg[i].footsize == storedUser.footsize){
            userList.push(ctlg[i]);
        }
    }
    for(let i=0; i<userList.length; i++){
        let li = document.createElement("li");
        li.className = "grid-item";
        li.style.display = "flex";
        li.style.flexDirection = "column";
        li.style.border = "3px solid black";
        const img = document.createElement("img");
        img.src = path+(userList[i].name)+".jpg";
        const p = document.createElement("p");
        p.textContent =userList[i].category+" " + userList[i].footsize +" "+ userList[i].height ;
        li.appendChild(img);
        li.appendChild(p);
        GridList.appendChild(li);
    }
}
if(storedUserJSON==null){
    ViewAll();
}

document.getElementById('userProfileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    user.height = document.getElementById('height').value,
    user.footsize = document.getElementById('footSize').value;
    userJSON = JSON.stringify(user);
    localStorage.setItem('user', userJSON);
    storedUserJSON = localStorage.getItem('user');
    storedUser = JSON.parse(storedUserJSON);
    userList = [];
    for(let i=0; i<10; i++){
        if (ctlg[i].category == "верх" && ctlg[i].height == storedUser.height){
            userList.push(ctlg[i]);
        }
        if (ctlg[i].category == "кросcовки" && ctlg[i].footsize == storedUser.footsize){
            userList.push(ctlg[i]);
        }
    }
    while (GridList.firstChild) {
        GridList.removeChild(GridList.firstChild);
    }
    // for(let i=0; i<userList.length; i++){
    //     let li = document.createElement("li");
    //     li.className = "grid-item";
    //     const img = document.createElement("img");
    //     img.src = path+(userList[i].name)+".jpg";
    //     li.appendChild(img);
    //     GridList.appendChild(li);
    // }
    for(let i=0; i<userList.length; i++){
        let li = document.createElement("li");
        li.className = "grid-item";
        li.style.display = "flex";
        li.style.flexDirection = "column";
        li.style.border = "3px solid black";
        const img = document.createElement("img");
        img.src = path+(userList[i].name)+".jpg";
        const p = document.createElement("p");
        p.textContent =userList[i].category+" " + userList[i].footsize +" "+ userList[i].height ;
        li.appendChild(img);
        li.appendChild(p);
        GridList.appendChild(li);
    }
})

function clearUser(){
    localStorage.removeItem('user');
    ViewAll();
}
function ViewAll(){
    while (GridList.firstChild) {
        GridList.removeChild(GridList.firstChild);
    }
    userList = [];
    for(let i=0; i<10; i++){
        userList.push(ctlg[i]);
    }
    // for(let i=0; i<userList.length; i++){
    //     let li = document.createElement("li");
    //     li.className = "grid-item";
    //     const img = document.createElement("img");
    //     img.src = path+(userList[i].name)+".jpg";
    //     li.appendChild(img);
    //     GridList.appendChild(li);
    // }
    for(let i=0; i<userList.length; i++){
        let li = document.createElement("li");
        li.className = "grid-item";
        li.style.display = "flex";
        li.style.flexDirection = "column";
        li.style.border = "3px solid black";
        const img = document.createElement("img");
        img.src = path+(userList[i].name)+".jpg";
        const p = document.createElement("p");
        p.textContent =userList[i].category+" " + userList[i].footsize +" "+ userList[i].height ;
        li.appendChild(img);
        li.appendChild(p);
        GridList.appendChild(li);
    }
}

const removeMyDataDiv = document.querySelector('.removeMyData');
const showAllRightNowDiv = document.querySelector('.showAllRightNow');
removeMyDataDiv.addEventListener('click', clearUser);
showAllRightNowDiv.addEventListener('click', ViewAll);
