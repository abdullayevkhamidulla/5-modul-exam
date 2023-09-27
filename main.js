let boxes = document.querySelectorAll(".box");
let right = document.getElementById("right");
let left = document.getElementById("left");
let center = document.getElementById("center");
let addtaskbutton = document.getElementById("btn1");
let addtaskbutton1 = document.getElementById("btn2");
let addtaskbutton2 = document.getElementById("btn3");



for (box of boxes){
 box.addEventListener("dragstart", function(e){
    let selected = e.target;

    right.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    right.addEventListener("drop", function (e){
        right.appendChild(selected);
        selected = null;
    });

    left.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    left.addEventListener("drop", function (e){
        left.appendChild(selected);
        selected = null;
    });

    center.addEventListener("dragover" , function (e){
        e.preventDefault();
    });

    center.addEventListener("drop", function (e) {
        center.appendChild(selected)
        selected = null;
    })
    
   

});
}
addtaskbutton.addEventListener("click", ()=> {
    const card =document.createElement("div");
    card.className="list h2";
    card.textContent="exra"
    left.append(card);
    card.draggable=true;
});
addtaskbutton1.addEventListener("click", ()=> {
    const card =document.createElement("div");
    card.className="list h2";
    card.textContent="exra"
    center.append(card);
    card.draggable=true;
});
addtaskbutton2.addEventListener("click", ()=> {
    const card =document.createElement("div");
    card.className="list h2";
    card.textContent="exra"
    right.append(card);
    card.draggable=true;
});

