let span = document.querySelector("header .ham-burger"),
  nav = document.getElementById("nav"),
  links = document.querySelectorAll("header .nav ul li a"),
  blink = [...links],
  mainDiv = document.getElementById("main-p");
let button = document.querySelector(".Arrow, .Arrow i");
button2 = document.getElementById("main-p3");

mainDiv.innerHTML = `
            <div class="first-p text-center">
                Combine <span>fine</span> images
            </div>
            <div class="second-p text-center">
                To represent a Product
            </div>
`;

function closeNavbar() {
  nav.classList.remove("open");
  span.classList.remove("active");
}

window.addEventListener("click", (event) => {
  if (!nav.contains(event.target) && !span.contains(event.target)) {
    closeNavbar();
  }
});
if (span) {
  span.addEventListener("click", (event) => {
    nav.classList.toggle("open");
    span.classList.toggle("active");
    // Prevent event from propagating to the window click listener
    event.stopPropagation();
  });
}

links.forEach((link) => {
  link.addEventListener("click", function () {
    for (let i = 0; i < blink.length; i++) {
      blink[i].classList.remove("active");
    }
    link.classList.toggle("active");
  });
});

// ==============
function checkWindowSize() {
  if (window.innerWidth < 600) {
    mainDiv.innerHTML = `
            <div class="first-p text-center">
                Mobile <br/> <span>Cool</span> images
            </div>
            <div class="second-p text-center">
                To represent a Product
            </div>
`;
  } else {
    mainDiv.innerHTML = `
            <div class="first-p text-center">
                Combine <span>fine</span> images
            </div>
            <div class="second-p text-center">
                To represent a Product
            </div>
`;
  }
}
checkWindowSize();
window.addEventListener("resize", checkWindowSize);
// ==================================
button.addEventListener("click", function () {
  console.log("Button clicked");

  window.scrollBy({
    top: 4000,
    behavior: "smooth",
  });
});
