// NAV
// NAV Smooth Scrolling
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop; // No need to adjust for navbar height
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
};

//NAV BURGER MENU
const hamburger = document.querySelector('.hamburger');
const navRight = document.querySelector('.nav_right');

hamburger.addEventListener('click', () => {
    navRight.classList.toggle('show');
});






//PROJECTS
//
//
filterSelection("all");

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c === "all") c = ""; // Show all items if "all" is selected

    // Loop through all elements and hide or show based on the filter
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) {
            w3AddClass(x[i], "show");
        }
    }
}

// Add the "show" class (sets display:block for visible items)
function w3AddClass(element, name) {
    if (element.className.indexOf(name) === -1) {
        element.className += " " + name;
    }
}

// Remove the "show" class (hides items)
function w3RemoveClass(element, name) {
    var arr = element.className.split(" ");
    while (arr.indexOf(name) > -1) {
        arr.splice(arr.indexOf(name), 1);
    }
    element.className = arr.join(" ");
}

// Highlight active button
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}






//ABOUT ME
//
//
function myFunction(element) {
    // Get the popup associated with the clicked element
    var popup = element.querySelector(".popuptext");

    // Check if the clicked popup is already visible
    if (popup.classList.contains("show")) {
        // If it's visible, hide it
        popup.classList.remove("show");
    } else {
        // Otherwise, hide all other popups
        var allPopups = document.querySelectorAll(".popuptext");
        allPopups.forEach((popup) => {
            popup.classList.remove("show");
        });

        // Show the clicked popup
        popup.classList.add("show");
    }
}

//CV DOWNLOAD
function downloadCV() {
    window.location.href = "path-to-your-cv.pdf"; // Replace with your CV file path
  }



//CONTACTS
//
//
// JavaScript for Contact Form Validation and Submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact form");
    const inputs = form.querySelectorAll("input, textarea");
    const nameField = form.querySelector('input[name="name"]');
    const emailField = form.querySelector('input[name="email"]');
    const messageField = form.querySelector('textarea[name="message"]');

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the form from refreshing the page

        // Validate inputs
        if (!nameField.value.trim() || !emailField.value.trim() || !messageField.value.trim()) {
            alert("Please fill in all the fields!");
            return;
        }

        if (!validateEmail(emailField.value)) {
            alert("Please enter a valid email address!");
            return;
        }

        // If validation passes
        alert("Your message has been sent successfully!");
        form.reset(); // Clear the form fields
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});

