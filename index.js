//document.getElementById("count-el").innerText = 5;
let saveEl = document.getElementById("count");
let countEl = document.getElementById("count-el");
let lapsCompleted = 0;


function increment(){
    lapsCompleted = lapsCompleted + 1;
    countEl.innerText = lapsCompleted;
}

function decreese(){
    lapsCompleted = lapsCompleted - 1;
    countEl.innerText = lapsCompleted;
}

function reset(){
    lapsCompleted = 0;
    countEl.innerText = lapsCompleted;
}

function save(){
   saveEl.innerText += (lapsCompleted + " - " );
   countEl.textContent = 0;
   lapsCompleted = 0;

}


