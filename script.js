const toggleBtm = document.getElementById("theme-toggle");
const icon = document.querySelector("i");

toggleBtm.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        icon.classList.replace("fa-moon", "fa-sun");
    }
    else{
        icon.classList.replace("fa-sun", "fa-moon");
    }
});    