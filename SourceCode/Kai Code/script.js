function showSection(id) {
    // hide all sections keep webpage one page
    document.querySelectorAll(".section").forEach(function (section) {
        section.style.display = "none";
    });

    // show selected
    document.getElementById(id).style.display = "block";

    // remove active from all buttons, then add to the right one
    document.querySelectorAll("nav button").forEach(function (button) {
        button.classList.remove("active");
    });

    document.getElementById("btn-" + id).classList.add("active");
}

// home on page load
showSection("home");

// stores the extra info when card is clciked
var cityInfo = {
    delhi: {
        title: "Delhi",
        text: "Delhi is the capital city of India. It is home to historical sites like the Red Fort, Qutb Minar, and Humayun's Tomb. The city has busy markets such as Chandni Chowk, and a wide variety of street food and restaurants."
    },
    agra: {
        title: "Agra",
        text: "Agra is most famous for the Taj Mahal, one of the Seven Wonders of the World. It also has Agra Fort and Fatehpur Sikri nearby. Many visitors come as part of a Golden Triangle trip combining Delhi, Agra, and Jaipur."
    },
    jaipur: {
        title: "Jaipur",
        text: "Jaipur is known as the Pink City because many of its buildings are painted pink. It is famous for Amber Fort, Hawa Mahal, and the City Palace. It is a popular stop on the Golden Triangle tourist route."
    },
    goa: {
        title: "Goa",
        text: "Goa is known for its beaches, relaxed atmosphere, and Portuguese heritage. Popular beaches include Baga, Calangute, and Palolem. It is a popular destination for both international and domestic tourists."
    }
};

//  gets city info 
function openCity(id) {
    var city = cityInfo[id];
    document.getElementById("popup-title").textContent = city.title;
    document.getElementById("popup-text").textContent = city.text;
    document.getElementById("city-overlay").style.display = "flex";
}

// close popup
function closeCity() {
    document.getElementById("city-overlay").style.display = "none";
}

// tracks the selected star rating
var selectedRating = 0;

function setRating(number) {
    selectedRating = number;

    // star colour for clarity
    var stars = document.querySelectorAll("#star-rating span");
    for (var i = 0; i < stars.length; i++) {
        stars[i].style.color = i < selectedRating ? "#e67e22" : "#ccc";
    }
}

// stores reviews
var allReviews = [];
//user inputs
function submitReview() {
    var city = document.getElementById("review-city").value;
    var comment = document.getElementById("review-comment").value;
    var name = document.getElementById("review-name").value;

    if (name === "") { alert("Please enter your name."); return; }
    if (selectedRating === 0) { alert("Please select a star rating."); return; }
    if (comment === "") { alert("please write a comment."); return; }

    // save rev to array
    allReviews.push({ name: name, city: city, rating: selectedRating, comment: comment });

    // resets form for next rev
    selectedRating = 0;
    setRating(0);
    document.getElementById("review-comment").value = "";
    document.getElementById("review-name").value = "";

    showReviews(); //update
}

function showReviews() {
    if (allReviews.length === 0) {
        document.getElementById("reviews-list").innerHTML = "<p>No reviews yet.</p>";
        return;
    }
    // review star system
    var html = "";
    for (var i = 0; i < allReviews.length; i++) {
        var stars = "";
        for (var s = 1; s <= 5; s++) {
            stars += s <= allReviews[i].rating ? "★" : "☆";
        }
        // newbuild review card
        html += `
    <div class='review-item'>
        <strong>${allReviews[i].name} — ${allReviews[i].city}</strong>
        <br>
        <span class='review-stars'>${stars}</span>
        <p class='review-comment'>${allReviews[i].comment}</p>
    </div>
`;
    }
    document.getElementById("reviews-list").innerHTML = html;
}

