let desc = "";
let days = "";


var today = new Date();

var year = today.getFullYear();
var month = today.getMonth() + 1; 
var dayOfMonth = today.getDate();

var todayString = year + '-' + (month < 10 ? '0' + month : month) + '-' + (dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth);

console.log(todayString);


if(localStorage.length !== 0){
    for (let index = 0; index < localStorage.length; index++) {
        addElements(index, localStorage.getItem(localStorage.key(index)));
    }
}

function addElements(days, desc){
    
    var arrayFromA = JSON.parse(desc);

    var newDiv = document.createElement("div");
    newDiv.classList.add("container2");
    
    var h1Element = document.createElement("h1");
    var dates = arrayFromA[1].split("-");
    var dates2 = todayString.split("-");

    console.log(dates);
    var daysOut = dates2[2] - dates[2];


    h1Element.textContent = "Дней: " + daysOut + " из " + localStorage.key(days);
    if(daysOut >= localStorage.key(days)){
        alert(arrayFromA[0] + "время прошло");
        remove(days);
    }
    var h2Element = document.createElement("h2");
    var arrayFromA = JSON.parse(desc);
    h2Element.textContent = arrayFromA[0];


    var h3Element = document.createElement("h3");
    h3Element.setAttribute("onclick", "remove(" + days + ");");
    h3Element.textContent = "Delete";

    newDiv.appendChild(h1Element);
    newDiv.appendChild(h2Element);
    newDiv.appendChild(h3Element);
    document.body.appendChild(newDiv);
    
}
function newData(){
    desc = document.getElementById('textInput').value;
    days = document.getElementById('daysInput').value;
    if(desc != "" && days != ""){
        let desc2 = [
            desc,
            todayString
        ]
        let stringifiedInterests = JSON.stringify(desc2)
        localStorage.setItem(days, stringifiedInterests);
        location.reload();
    }
}
let day = 0;
function remove(day){
    localStorage.removeItem(localStorage.key(day));
    location.reload();
}
