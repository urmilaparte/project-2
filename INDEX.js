





const  goal = document.getElementsByClassName("bulb")[0];
let btn = document.querySelector("button");


var fox = 0;

btn.addEventListener("click",function () {


    if (fox === 0) {

        goal.style.backgroundColor = "green";
        fox = 1;

    }else{
        goal.style.backgroundColor = "transparent";
        fox=0;
        
    }
 
})