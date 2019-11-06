var clicks = 0;
document.getElementById("button").addEventListener("click",function(){
    clicks += 1;
    console.log("You clicked the button " + clicks + " times");
});