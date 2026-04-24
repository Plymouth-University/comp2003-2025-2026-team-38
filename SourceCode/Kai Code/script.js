function showSection(id) {
    //section handling
    var sections = document.getElementsByClassName("section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    document.getElementById(id).style.display = "block";

    //buttons
    var buttons = document.querySelectorAll("nav button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    var activeButton = document.getElementById("btn-" + id);
    if (activeButton) {
        activeButton.classList.add("active");
    }
}

// home on page load
showSection("home");