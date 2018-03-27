function myFunction() {
    document.getElementById("demo").style.color = "white";
    var randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (randomNumber === 1) {
        document.getElementById("demo").style.backgroundColor = "#8b04b8";
    } else if (randomNumber === 2) {
        document.getElementById("demo").style.backgroundColor = "#66cc99";
    } else {
        document.getElementById("demo").style.backgroundColor = "#0699C1";
    }
}