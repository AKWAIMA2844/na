let ham = document.getElementsByClassName('ham')[0];
let d = document.getElementsByClassName('dropdown')[0];

ham.addEventListener("click", function() {
    if (d.style.display == "none" || d.style.display == ""){
        d.style.display="flex";
    } else {
        d.style.display = "none";
    }
}) 