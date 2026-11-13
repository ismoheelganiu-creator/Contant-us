
/* MOBILE MENU */
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );
});

/* CLOSE MENU AFTER CLICKING A LINK */
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

/* SET THE MINIMUM APPOINTMENT DATE */
const dateInput = document.getElementById("date");

function getLocalDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

dateInput.min = getLocalDate();

/* APPOINTMENT FORM */
const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const date = dateInput.value;

    if (!name || !email || !phone || !service || !date) {
        formMessage.textContent =
            "Please complete all the required fields.";
        formMessage.style.color = "#b42318";
        return;
    }

    if (date < getLocalDate()) {
        formMessage.textContent =
            "Please choose today or a future date.";
        formMessage.style.color = "#b42318";
        return;
    }

    formMessage.textContent =
        `Thank you, ${name}! Your request for ${service} on ${date} ` +
        "has been prepared. This is a demo; the shop has not received it.";

    formMessage.style.color = "#287a3e";

    // Demonstration only: no information is sent to a server.
    console.log("Demo appointment:", {
        name: name,
        email: email,
        phone: phone,
        service: service,
        date: date
    });

    bookingForm.reset();
    dateInput.min = getLocalDate();
});

/* AUTOMATIC COPYRIGHT YEAR */
document.getElementById("year").textContent =
    new Date().getFullYear();

/* WEBSITE STARTUP MESSAGE */
console.log("Welcome to Royal Stitch Tailors!");
