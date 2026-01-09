function showSection(id) {

    // get all sections on the page
    var sections = document.getElementsByClassName("section");

    // hide every section first
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }

    // show the selected section
    document.getElementById(id).style.display = "block";
}

// show the home section when the page loads
showSection("home");
