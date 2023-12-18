function myFunction() {
    var nav = document.getElementById("myTopnav");
    if (nav.className === "container") {
        nav.className += " responsive";
    } else {
        nav.className = "container";
    }
}