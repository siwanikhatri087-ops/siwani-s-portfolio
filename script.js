// Open mobile menu
function openMenu() {
    var dropdown = document.getElementById("dropdown");
    dropdown.style.display = "flex";
}

// Close mobile menu
function closeMenu() {
    var dropdown = document.getElementById("dropdown");
    dropdown.style.display = "none";
}

// Toggle left side panel (open/close)
function togglePanel() {
    var panel = document.getElementById("side-panel");
    var btn = document.querySelector(".panel-btn");

    if (panel.classList.contains("collapsed")) {
        panel.classList.remove("collapsed");
        btn.textContent = "‹";
    } else {
        panel.classList.add("collapsed");
        btn.textContent = "›";
    }
}

// Close mobile menu when clicking outside
document.addEventListener("click", function(event) {
    var dropdown = document.getElementById("dropdown");
    var menuIcon = document.querySelector(".menu-icon");

    if (dropdown && menuIcon) {
        if (!dropdown.contains(event.target) && event.target !== menuIcon) {
            dropdown.style.display = "none";
        }
    }
});

// Typewriter effect (only runs on home page)
var typedElement = document.getElementById("typed");

if (typedElement) {
    var words = ["Developer", "Designer", "Problem Solver"];
    var wordIndex = 0;
    var letterIndex = 0;
    var deleting = false;

    function typeWriter() {
        var currentWord = words[wordIndex];

        if (deleting) {
            letterIndex--;
        } else {
            letterIndex++;
        }

        typedElement.textContent = currentWord.substring(0, letterIndex);

        var speed = 100;

        if (!deleting && letterIndex === currentWord.length) {
            speed = 1500;
            deleting = true;
        } else if (deleting && letterIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 100;
        } else if (deleting) {
            speed = 50;
        }

        setTimeout(typeWriter, speed);
    }

    setTimeout(typeWriter, 500);
}

// Contact form submit
function sendMessage(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var msg = document.getElementById("form-msg");

    if (!name || !email || !subject || !message) {
        msg.textContent = "Please fill in all fields.";
        msg.style.color = "red";
        return;
    }

    msg.textContent = "Message sent! I will get back to you soon.";
    msg.style.color = "green";

    event.target.reset();

    setTimeout(function() {
        msg.textContent = "";
    }, 5000);
}
