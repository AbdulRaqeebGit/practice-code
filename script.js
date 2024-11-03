document.getElementById("light").addEventListener("click", function(){
    var select = document.querySelector("body");
    select.style.backgroundColor = "white";
});
document.getElementById("light").addEventListener("click", function(){
    var select = document.querySelector("h1");
    select.style.color = "black";
});
document.getElementById("light").addEventListener("click", function(){
    var select = document.querySelector("div").style.border = "1px solid black"
});

document.getElementById("dark").addEventListener("click", function(){
    var select = document.querySelector("body");
    select.style.backgroundColor = "";
});
document.getElementById("dark").addEventListener("click", function(){
    var select = document.querySelector("h1");
    select.style.color = "";
});
document.getElementById("dark").addEventListener("click", function(){
    var select = document.querySelector("div").style.border = "";
});