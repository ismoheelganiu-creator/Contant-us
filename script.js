
/* ===================================
   1. MOBILE NAVIGATION MENU
=================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close the menu after clicking a navigation link.
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});


/* ===================================
   2. PRODUCT ORDER BUTTONS
=================================== */

const orderButtons = document.querySelectorAll(".order-btn");
const messageField = document.getElementById("message");
const appointmentForm = document.getElementById("appointmentForm");

orderButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const productName = button.dataset.product;

        messageField.value =
            "I am interested in ordering: " + productName +
            ". Please contact me about the design, fabric, and price.";

        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });

        messageField.focus({ preventScroll: true });
    });
});


/* ===================================
   3. APPOINTMENT DATE
=================================== */

const dateInput = document.getElementById("appointmentDate");

// Prevent selecting a date earlier than today.
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;


/* ===================================
   4. APPOINTMENT FORM
=================================== */

const formMessage = document.getElementById("formMessage");

appointmentForm.addEventListener("submit", function (event) {
    // Stop the browser from reloading the page.
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const appointmentDate = dateInput.value;

    if (!fullName || !email || !phone || !service || !appointmentDate) {
        formMessage.textContent = "Please complete all required fields.";
        return;
    }

    // Check that the chosen date is not in the past.
    if (appointmentDate < dateInput.min) {
        formMessage.textContent = "Please choose today or a future date.";
        return;
    }

    // This is a demonstration, not a real booking system.
    formMessage.textContent =
        `Thank you, ${fullName}! Your appointment request for ` +
        `${service} on ${appointmentDate} has been prepared. ` +
        "This demo does not send your request to the tailor.";

    formMessage.style.color = "#287a3e";

    console.log("Demo appointment request:", {
        fullName: fullName,
        email: email,
        phone: phone,
        service: service,
        appointmentDate: appointmentDate,
        message: messageField.value.trim()
    });

    // Clear the form after the demonstration.
    appointmentForm.reset();

    // Keep the date restriction after resetting.
    dateInput.min = `${year}-${month}-${day}`;
});


/* ===================================
   5. NEWSLETTER FORM
=================================== */

const newsletterForm = document.getElementById("newsletterForm");
const newsletterMessage = document.getElementById("newsletterMessage");

newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newsletterEmail =
        document.getElementById("newsletterEmail").value.trim();

    if (!newsletterEmail) {
        newsletterMessage.textContent = "Please enter your email address.";
        return;
    }

    // Demo only: no email is saved or sent.
    newsletterMessage.textContent =
        "Thank you! The newsletter form is working in demo mode.";

    newsletterMessage.style.color = "#171717";

    newsletterForm.reset();
});


/* ===================================
   6. AUTOMATIC COPYRIGHT YEAR
=================================== */

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


/* ===================================
   7. WELCOME MESSAGE IN CONSOLE
=================================== */

console.log("Welcome to Royal Stitch Tailors!");
console.log("Royal Stitch website loaded successfully.");
