// Smooth Scroll for Navigation Links
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name === "" || email === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Thank you, " + name + "! Your message has been sent.");
    }
});

// Image Hover Effect
document.querySelectorAll("img").forEach(image => {
    image.addEventListener("mouseover", () => {
        image.style.transform = "scale(1.2)";
    });

    image.addEventListener("mouseout", () => {
        image.style.transform = "scale(1)";
    });
});

document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        document.title = "👀 Hey, come back!";
    } else {
        document.title = "Constantine Akas - Resume";
    }
});
