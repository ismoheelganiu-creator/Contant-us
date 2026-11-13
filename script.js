
/* 1. MOBILE NAVIGATION */
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
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

/* 2. QUOTATION FORM */
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const projectType = document.getElementById("projectType").value;
    const budget = document.getElementById("budget").value;

    if (!fullName || !email || !phone || !projectType || !budget) {
        formMessage.textContent = "Please fill in all required fields.";
        formMessage.style.color = "#b42318";
        return;
    }

    // Demonstration only: this does not send a real quotation request.
    formMessage.textContent =
        `Thank you, ${fullName}! Your ${projectType} enquiry ` +
        "has been prepared. This demo has not sent it to the business.";

    formMessage.style.color = "#287a3e";

    console.log("Demo quotation request:", {
        fullName: fullName,
        email: email,
        phone: phone,
        projectType: projectType,
        budget: budget,
        message: document.getElementById("message").value.trim()
    });

    contactForm.reset();
});

/* 3. AUTOMATIC COPYRIGHT YEAR */
document.getElementById("year").textContent =
    new Date().getFullYear();

/* 4. WEBSITE STARTUP MESSAGE */
console.log("Welcome to Royal POP Designs!");
