var inputBox = document.querySelector("#panel-up #enterTask");
var listContainer = document.querySelector("#list-container");
var addBtn = document.querySelector("#addTask");
var panelBtm = document.querySelector("#panel-btm");
var clrAllPanel = document.querySelector("#panel-clrAll");
var clrAll;
function createList(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }else{
        var li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = '';
        saveData();
        var span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        if(listContainer.childElementCount === 1){
            
        }
        if(clrAllPanel.hasChildNodes()===false){
            clrAll = document.createElement("button");
            clrAll.innerHTML = "Clear All";
            clrAllPanel.appendChild(clrAll);
            saveClrAll();
        }
        saveData();
    }
}

panelBtm.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === 'SPAN'){
        if(e.target.parentElement.classList.contains("checked")){
            e.target.parentElement.remove();
            if(listContainer.childElementCount === 0){
                clrAll.remove();
            }
            saveData();
        }else{
            alert("First finish your task!");
        }
    }
},false)
clrAllPanel.addEventListener("click",function(){
        // console.log("hi");
        listContainer.innerHTML = '';
        clrAllPanel.firstChild.remove();
        localStorage.removeItem("data");
        saveClrAll();
})
// to sa
function saveClrAll(){
    localStorage.setItem("action",clrAllPanel.innerHTML)
}
// To save the current data in the local storage
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
    // localStorage.setItem("data",clrAllPanel.innerHTML);
}
// To show the data stored in the local storage
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
    clrAllPanel.innerHTML = localStorage.getItem("action");
}

showData();