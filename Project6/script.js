onload = () => {
    var show = document.getElementById("show");
    var hide = document.getElementById("hide"); 

    show.addEventListener("click", () => {
        document.getElementById("hidden-container").style.display = "flex";
    });
    hide.addEventListener("click", () => {
        document.getElementById("hidden-container").style.display = "none";
    });
}