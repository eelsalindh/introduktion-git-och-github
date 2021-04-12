"use strict";

getColorSchemes();
addScheme(1);
document.querySelector("#top > div:first-child").classList.add("selected");

//Hämta färgschema TESSSTTTT
function getColorSchemes(){
    for (let i=1; i < 5; i++) {
        let div = document.createElement("div");
        document.querySelector("#top").append(div);
        
        color(i);
        function color(a){
            for (let j=1; j <= 5; j++) {
                let innerDiv = document.createElement("div");
                innerDiv.style.backgroundColor = getColor(a, j);

                div.append(innerDiv);
            }

            div.querySelector("div:nth-child(3)").innerHTML = `SCHEME ${a}`;

            div.addEventListener("click", function(){
                addScheme(a);
                removeClassFromElement(document.querySelector(".selected"), "selected");
                div.classList.add("selected");
            });
        };
    };
};


function addScheme(a) {
    document.getElementById("playground").style.backgroundColor = getColor(a, 1);
    document.getElementById("one").style.backgroundColor = getColor(a, 2);
    document.getElementById("two").style.backgroundColor = getColor(a, 3);
    document.getElementById("three").style.backgroundColor = getColor(a, 5);
    document.getElementById("four").style.backgroundColor = getColor(a, 5);
    document.getElementById("five").style.backgroundColor = getColor(a, 1);
};

document.querySelector("#bigger").addEventListener("click", function(){
    document.documentElement.style.setProperty("--size", "30vw");
});

document.querySelector("#smaller").addEventListener("click", function(){
    document.documentElement.style.setProperty("--size", "3vw");
});

document.querySelector("#stop").addEventListener("click", function(){
    let size = getComputedStyle(document.getElementById("one")).getPropertyValue("height");
    document.documentElement.style.setProperty("--size", size);
});
