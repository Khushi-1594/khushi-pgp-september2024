let input= document.getElementById("inputcol");
let taskList= document.getElementById("list-container");

function addTask(){
    if(input.value === ''){
        alert("You must write something!")
    }
    else{
        let task=document.createElement("li");
        task.innerHTML= input.value;
        taskList.appendChild(task);

        let span= document.createElement("span");
        span.innerHTML= "\u00d7";
        task.appendChild(span);
    }
    input.value="";
    saveData();
}

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//to save the data in browser
function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}
function showTask(){
    taskList.innerHTML= localStorage.getItem("data");
}
showTask();