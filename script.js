var toggle = document.querySelector(".toggle");
var topNav = document.querySelector(".nav-top ul");



toggle.addEventListener("click", function() {
    console.log("toggle was clicked")
    topNav.classList.toggle("active")
});

function choice() {
    document.querySelector(".choice").style.display = "block";
}


var d = document.querySelector("#date span");
var greeting;
var time = new Date().getHours();
var min = new Date().getMinutes();
if (time < 12) {
greeting = "Good Morning"
}
else if (time < 16) {
    greeting = "Good Afternoon"
}
else {
    greeting = "Good Evening";
}
d.innerHTML = greeting;
document.querySelector("#hour").innerHTML = time;
document.querySelector("#min").innerHTML = min;

document.querySelector(".light").addEventListener("click", function() {
    document.querySelector(".choice").style.display = "none";
    alert("Ligth mode has been enable... Please reload the page if you want Dark mode")
});

document.querySelector(".dark").addEventListener("click", function() {
    document.querySelector(".choice").style.display = "none";
    // alert("Ligth mode has been enable... Please reload the page if you want Light mode")
    document.querySelector(".nav").style.backgroundColor ="black";
    document.querySelector(".nav").style.color ="white";
    document.querySelector(".toggle").style.border ="3px solid white";
    document.querySelector(".toggle .fa-solid").style.color ="white";
    document.querySelector(".nav-top ul").style.backgroundColor ="black";
    document.querySelector("#home").style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0), #010101), url(806443.jpg)";
    document.querySelector("body").style.backgroundColor ="#010101";

    var x = document.querySelectorAll(".black");
    var purple = document.querySelectorAll(".purple");
    var grey = document.querySelectorAll(".grey");
    var btn_purple = document.querySelectorAll(".btn-1");
    var bg_light = document.querySelectorAll(".bg-color");
    var purple_light = document.querySelectorAll(".purple-light");
    var shadow_box = document.querySelectorAll("#shadowbox");
    var lead = document.querySelectorAll(".lead");
    var check_icon = document.querySelectorAll(".fa-chart-line");
    var icon = document.querySelectorAll(".icon-color");
    var shadow_boxlist = document.querySelectorAll("#cards");
    var fs1cards = document.querySelectorAll("#cards .para-o .pt1");
    var fs2cards = document.querySelectorAll("#cards");
    var blog = document.querySelectorAll("#blog .flex .col-xxlg-3");

    
    


    var i;
    for(i=0; i < lead.length; i++) {
        lead[i].style.color = "#F0ECE2";
    }
   
    for(i=0; i < fs2cards.length; i++) {
        fs2cards[i].style.color = "#F0ECE2";
    }
    for(i=0; i < fs1cards.length; i++) {
        fs1cards[i].style.color = "#F0ECE2";
    }
    for(i=0; i < check_icon.length; i++) {
        check_icon[i].style.color = "#f8f9fa";
    }
    for(i=0; i < icon.length; i++) {
        icon[i].style.color = "white";
    }
    for(i=0; i < x.length; i++) {
        x[i].style.color = "white";
    }
    for(i=0; i < purple.length; i++) {
        purple[i].style.color = "#ECECEC";
    }
    for(i=0; i < grey.length; i++) {
        grey[i].style.color = "#F0ECE2";
    }
    for(i=0; i < btn_purple.length; i++) {
        btn_purple[i].style.backgroundColor = "#F2A365";
        btn_purple[i].style.boxShadow = "3px 5px 20px  #F2A365"; 
    }
    for(i=0; i < bg_light.length; i++) {
        bg_light[i].style.backgroundColor = "#222831";
    }
    for(i=0; i < purple_light.length; i++) {
        purple_light[i].style.color = "#F0ECE2";
    }
    for(i=0; i < shadow_box.length; i++) {
        shadow_box[i].style.boxShadow = "1px 4px 8px 1px white";
    }
    for(i=0; i < shadow_boxlist.length; i++) {
        shadow_boxlist[i].style.boxShadow = "1px 4px 8px 1px white";
    }
    for(i=0; i < blog.length; i++) {
        blog[i].style.boxShadow = "1px 4px 8px 1px white";
    }
})

