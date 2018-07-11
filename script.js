let startButtonOff = document.getElementById("start");

startButtonOff.addEventListener("click", () => {

    document.getElementById("start").disabled = true;
    document.getElementById("quit").disabled = false;
    console.log("It worked!");

})

let startButtonRefresh = document.getElementById("quit");

startButtonRefresh.addEventListener("click", () => {

    document.getElementById("quit").disabled = true;
    document.getElementById("start").disabled = false;

})

