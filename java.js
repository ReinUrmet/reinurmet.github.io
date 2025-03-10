// NAV
// NAV Smooth Scrolling
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop; 
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

//NAV burgerr
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

  //Contact form errori selgitus:
  document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert("I'm sorry, the contact form is currently not working due to my site being hosted on GitHub Pages.");
      });
    }
  });
  