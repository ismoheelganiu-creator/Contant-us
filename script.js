
// ===================================
// 1. BIRTHDAY COUNTDOWN TIMER
// ===================================

function updateCountdown() {

    // Set the birthday date
    let birthdayDate = new Date(
        "December 20, 2026 14:00:00"
    ).getTime();

    let currentDate = new Date().getTime();

    let difference = birthdayDate - currentDate;

    // Check if the birthday has arrived
    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        document.getElementById("countdown-message").textContent =
            "🎉 The birthday celebration has started!";

        return;
    }

    // Calculate days, hours, minutes and seconds
    let days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    let hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    let minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    let seconds = Math.floor(
        (difference / 1000) % 60
    );

    // Display countdown
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

// Run countdown every second
updateCountdown();

setInterval(updateCountdown, 1000);


// ===================================
// 2. SEND BIRTHDAY WISHES
// ===================================

function sendWish() {

    let name = document.getElementById("guestName").value.trim();

    let wish = document.getElementById("guestWish").value.trim();

    let result = document.getElementById("wishResult");

    let board = document.getElementById("wishBoard");

    // Check empty fields
    if (name === "" || wish === "") {

        result.textContent =
            "Please enter your name and birthday wish!";

        return;
    }

    // Create a new birthday message
    let message = document.createElement("div");

    message.className = "wish-message";

    let guestTitle = document.createElement("h4");
    guestTitle.textContent = "❤️ " + name;

    let guestText = document.createElement("p");
    guestText.textContent = wish;

    message.appendChild(guestTitle);
    message.appendChild(guestText);

    // Remove the default message
    if (board.textContent.includes("Be the first")) {
        board.innerHTML = "";
    }

    // Add birthday wish to the board
    board.appendChild(message);

    result.textContent =
        "Thank you " + name + "! Your birthday wish has been added. 🎉";

    // Clear the input fields
    document.getElementById("guestName").value = "";
    document.getElementById("guestWish").value = "";

}


// ===================================
// 3. GUEST RSVP REGISTRATION
// ===================================

function submitRSVP() {

    let name = document.getElementById("rsvpName").value.trim();

    let email = document.getElementById("rsvpEmail").value.trim();

    let attendance = document.getElementById("attendance").value;

    let result = document.getElementById("rsvpResult");

    // Validate guest information
    if (name === "" || email === "" || attendance === "") {

        result.textContent =
            "Please complete all the fields.";

        return;
    }

    // Check email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        result.textContent =
            "Please enter a valid email address.";

        return;
    }

    // Display confirmation
    if (attendance === "Yes") {

        result.textContent =
            "Thank you " + name +
            "! We look forward to seeing you at the party! 🎉";

    } else {

        result.textContent =
            "Thank you " + name +
            "! We appreciate your response. ❤️";

    }

    // Clear the form
    document.getElementById("rsvpName").value = "";
    document.getElementById("rsvpEmail").value = "";
    document.getElementById("attendance").value = "";

}


// ===================================
// 4. CELEBRATION BUTTON
// ===================================

function startCelebration() {

    let message =
        document.getElementById("celebrationMessage");

    message.textContent =
        "🎉🎊 HAPPY BIRTHDAY! 🎂🎈 LET'S CELEBRATE! 🎊";

    // Change background colour
    document.querySelector(".celebration").style.background =
        "linear-gradient(135deg, #ff4081, #7b1fa2, #ff9800)";

    // Show celebration message
    alert("🎂 Happy Birthday! Enjoy your special day! 🎉");

}


// ===================================
// 5. WELCOME MESSAGE
// ===================================

window.addEventListener("load", function() {

    console.log("Welcome to the Birthday Party Website!");

});
