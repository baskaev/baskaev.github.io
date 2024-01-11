class usser{
    height;
    footsize;
    constructor(height, footsize){
        this.height=height;
        this.footsize=footsize;
    }
}
class product{
    ItemName;
    name;
    category;
    height;
    footsize;
    constructor(name, category, height, footsize, ItemName){
        this.name=name;
        this.category=category;
        this.height=height;
        this.footsize=footsize;
        this.ItemName = ItemName;
    }
}

let ctlg=new Array(10);
ctlg[0]=new product('1', 'кросcовки', '0', '35', 'кроссовки крутые' );
ctlg[1]=new product('2', 'кросcовки', '0', '35', 'фиговые кроссовки' );
ctlg[2]=new product('3', 'кросcовки', '0', '36', 'кроссовки хайп' );
ctlg[3]=new product('4', 'кросcовки', '0', '36', 'кроссовки сандали');
ctlg[4]=new product('5', 'кросcовки', '0', '37', 'ходули планктона' );
ctlg[5]=new product('6', 'кросcовки', '0', '37', 'нога пирата' );
ctlg[6]=new product('7', 'верх', '185', '0', 'Люкс');
ctlg[7]=new product('8', 'верх', '185', '0', 'Половая тряпка');
ctlg[8]=new product('9', 'верх', '185', '0', 'Zewa delux');
ctlg[9]=new product('10', 'верх', '185', '0', 'Набережные челны');

let userList;

user = new usser('0', '0');
let userJSON;
let storedUserJSON;
let storedUser;
let path = "res/";
let GridList = document.getElementById('grid-list');
storedUserJSON = localStorage.getItem('user');
if(storedUserJSON!=null){
    fromStored();
}
function fromStored(){
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
        p.textContent =userList[i].ItemName+" " + userList[i].footsize +" "+ userList[i].height ;
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
    
    for(let i=0; i<userList.length; i++){
        let li = document.createElement("li");
        li.className = "grid-item";
        li.style.display = "flex";
        li.style.flexDirection = "column";
        li.style.border = "3px solid black";
        const img = document.createElement("img");
        img.src = path+(userList[i].name)+".jpg";
        const p = document.createElement("p");
        p.textContent =userList[i].ItemName+" " + userList[i].footsize +" "+ userList[i].height ;
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
    
    for(let i=0; i<userList.length; i++){
        let li = document.createElement("li");
        li.className = "grid-item";
        li.style.display = "flex";
        li.style.flexDirection = "column";
        li.style.border = "3px solid black";
        const img = document.createElement("img");
        img.src = path+(userList[i].name)+".jpg";
        const p = document.createElement("p");
        p.textContent =userList[i].ItemName+" " + userList[i].footsize +" "+ userList[i].height ;
        li.appendChild(img);
        li.appendChild(p);
        GridList.appendChild(li);
    }
}
function SearchItem(){
    if(storedUserJSON!=null){
        fromStored();
    }
    if(storedUserJSON==null){
        ViewAll();
    }
    poisk = document.getElementById('ItemName').value;
    // console.log(poisk);
    while (GridList.firstChild) {
        GridList.removeChild(GridList.firstChild);
    }
    let oldList = userList;
    userList = [];
    for(let i=0; i<oldList.length; i++){
        // console.log(oldList[i].ItemName);
        if (oldList[i].ItemName.includes(poisk)){
            userList.push(oldList[i]);
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
        p.textContent =userList[i].ItemName+" " + userList[i].footsize +" "+ userList[i].height ;
        li.appendChild(img);
        li.appendChild(p);
        GridList.appendChild(li);
    }
}
const removeMyDataDiv = document.querySelector('.removeMyData');
const showAllRightNowDiv = document.querySelector('.showAllRightNow');
removeMyDataDiv.addEventListener('click', clearUser);
showAllRightNowDiv.addEventListener('click', ViewAll);
const searchbtn = document.querySelector('.searchbtn');
searchbtn.addEventListener('click', SearchItem);
