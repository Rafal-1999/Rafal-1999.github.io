// Skrypt na ukrycie przycisku powrotu do gór w momencie gdy jest się na samej górze.
let scrolling = document.getElementsByClassName("container-icon__arrow-up");
function scrollFunction() {
    if (window.scrollY > 20) {
        console.log(scrollY);
        document.getElementsByClassName(".container-icon__arrow-up").style.display = "block";
        // scrolling.style.display = "block";
        console.log("Pokaż go");
    } else {
        document.getElementsByClassName(".container-icon__arrow-up").style.display = "none";
        // scrolling.style.display = "none";
    }
}
function scrollFunctionUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = () => {
    scrollFunction();
}