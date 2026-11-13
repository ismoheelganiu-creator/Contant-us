```javascript
// GET ELEMENTS FROM THE HTML
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const result = document.getElementById("result");
const year = document.getElementById("year");

// DISPLAY THE CURRENT YEAR IN THE FOOTER
year.textContent = new Date().getFullYear();

// OPEN AND CLOSE THE MOBILE MENU
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");
    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// CLOSE THE MOBILE MENU AFTER CLICKING A LINK
const links = navLinks.querySelectorAll("a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open navigation menu");
    });
});

// HANDLE THE CONTACT FORM
contactForm.addEventListener("submit", function (event) {
    // Stop the browser from reloading the page
    event.preventDefault();

    // GET THE INFORMATION ENTERED BY THE VISITOR
    const name = document.getElementById("name").value.trim();
    const service = document.getElementById("service").value;

    // SHOW A THANK-YOU MESSAGE
    result.textContent =
        "Thank you, " + name + "! Your enquiry about " +
        service + " has been recorded in this demo.";

    // CLEAR THE FORM
    contactForm.reset();
});
```