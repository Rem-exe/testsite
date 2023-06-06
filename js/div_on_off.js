function invisible0() {
    var all_divs = document.getElementsByClassName('invisible');
    for(var i = 0; i < all_divs.length; i++) {
        all_divs[i].style.display = "none";
    }
}

function invisible1() {
    var div = document.getElementById("div1");
    var bouton = document.getElementById("btn1");
    activebtn(bouton);
    cache_div(div);
}
function invisible2() {
    var div = document.getElementById("div2");
    var bouton = document.getElementById("btn2");
    activebtn(bouton);
    cache_div(div);
}
function invisible3() {
    var div = document.getElementById("div3");
    var bouton = document.getElementById("btn3");
    activebtn(bouton);
    cache_div(div);
}
function invisible4() {
    var div = document.getElementById("div4");
    var bouton = document.getElementById("btn4");
    activebtn(bouton);
    cache_div(div);
}
function invisible5() {
    var div = document.getElementById("div5");
    var bouton = document.getElementById("btn5");
    activebtn(bouton);
    cache_div(div);
}
function invisible6() {
    var div = document.getElementById("div6");
    var bouton = document.getElementById("btn6");
    activebtn(bouton);
    cache_div(div);
}
function invisible7() {
    var div = document.getElementById("div7");
    var bouton = document.getElementById("btn7");
    activebtn(bouton);
    cache_div(div);
}
function invisible8() {
    var div = document.getElementById("div8");
    var bouton = document.getElementById("btn8");
    activebtn(bouton);
    cache_div(div);
}
function invisible9() {
    var div = document.getElementById("div9");
    var bouton = document.getElementById("btn9");
    activebtn(bouton);
    cache_div(div);
}
function invisible10() {
    var div = document.getElementById("div10");
    var bouton = document.getElementById("btn10");
    activebtn(bouton);
    cache_div(div);
}
function invisible11() {
    var div = document.getElementById("div11");
    var bouton = document.getElementById("btn11");
    activebtn(bouton);
    cache_div(div);
}
function invisible12() {
    var div = document.getElementById("div12");
    var bouton = document.getElementById("btn12");
    activebtn(bouton);
    cache_div(div);
}

function cache_div(div) {
    var all_divs = document.getElementsByClassName('invisible');
    for(var i = 0; i < all_divs.length; i++) {
        all_divs[i].style.display = "none";
    }
    if (div.style.display == "none") {
        div.style.display = "block";
    }
}

function activebtn(bouton) {
    bouton.focus();
}