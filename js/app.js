function buttonColor() {
    document.getElementById("colors").style.color = "white";
    var randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (randomNumber === 1) {
        document.getElementById("colors").style.backgroundColor = "#8b04b8";
    } else if (randomNumber === 2) {
        document.getElementById("colors").style.backgroundColor = "#66cc99";
    } else {
        document.getElementById("colors").style.backgroundColor = "#0699C1";
    }
}