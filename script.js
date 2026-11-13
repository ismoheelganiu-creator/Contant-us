
// SELECT HTML ELEMENTS
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const videoCards = document.querySelectorAll(".video-card");
const categoryButtons = document.querySelectorAll(".category");
const sideLinks = document.querySelectorAll(".side-link");
const menuBtn = document.getElementById("menuBtn");
const createBtn = document.getElementById("createBtn");
const resultMessage = document.getElementById("resultMessage");
const emptyMessage = document.getElementById("emptyMessage");
const videoGrid = document.getElementById("videoGrid");

let selectedCategory = "All";

// SEARCH AND FILTER VIDEOS
function filterVideos() {
    const searchText = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    videoCards.forEach(function(card) {
        const title = card.dataset.title.toLowerCase();
        const channel = card.dataset.channel.toLowerCase();
        const category = card.dataset.category;

        const matchesSearch =
            title.includes(searchText) ||
            channel.includes(searchText);

        const matchesCategory =
            selectedCategory === "All" ||
            category === selectedCategory;

        if (matchesSearch && matchesCategory) {
            card.style.display = "";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    emptyMessage.hidden = visibleCount !== 0;

    resultMessage.textContent =
        visibleCount + (visibleCount === 1
        ? " video found."
        : " videos found.");
}

// SEARCH WHEN THE USER TYPES
searchInput.addEventListener("input", filterVideos);

// PREVENT THE FORM FROM RELOADING THE PAGE
searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    filterVideos();
});

// SELECT A CATEGORY
function selectCategory(category) {
    selectedCategory = category;

    categoryButtons.forEach(function(button) {
        button.classList.toggle(
            "active",
            button.dataset.category === category
        );
    });

    sideLinks.forEach(function(link) {
        link.classList.toggle(
            "active",
            link.dataset.category === category &&
            link.textContent.includes(
                category === "All" ? "Home" : category
            )
        );
    });

    filterVideos();
}

// CATEGORY BUTTON EVENTS
categoryButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        selectCategory(button.dataset.category);
    });
});

// SIDEBAR CATEGORY EVENTS
sideLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        selectCategory(link.dataset.category);
    });
});

// SHOW OR HIDE THE SIDEBAR
menuBtn.addEventListener("click", function() {
    document.body.classList.toggle("sidebar-hidden");
});

// CLICK A VIDEO TO SEARCH FOR IT ON YOUTUBE
videoCards.forEach(function(card) {
    card.addEventListener("click", function() {
        const title = card.dataset.title;
        const channel = card.dataset.channel;

        const query = encodeURIComponent(
            title + " " + channel
        );

        window.open(
            "https://www.youtube.com/results?search_query=" + query,
            "_blank",
            "noopener,noreferrer"
        );
    });
});

// CREATE BUTTON
createBtn.addEventListener("click", function() {
    alert(
        "Welcome to your YouTube-style project! " +
        "Uploading videos requires a backend and a video hosting service."
    );
});

// DISPLAY THE INITIAL VIDEO COUNT
filterVideos();
