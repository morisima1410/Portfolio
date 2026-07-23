/* ==========================================================
    Portfolio Website
    Developer : Sima Mori
    script.js
========================================================== */

/* ==========================
        LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 2500);

});


/* ==========================
      TYPING EFFECT
========================== */

const typingElement = document.getElementById("typing");

const roles = [

    "Full Stack Developer",

    "Android Developer",

    "Frontend Developer",

    "React.js Developer",

    "AI Enthusiast"

];

let roleIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 110);

}

typeEffect();


/* ==========================
      THEME TOGGLE
========================== */

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.innerHTML = "🌞";

    } else {

        themeBtn.innerHTML = "🌙";

    }

});


/* ==========================
    SCROLL PROGRESS BAR
========================== */

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});


/* ==========================
      STICKY NAVBAR
========================== */

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});
/* ==========================================================
        SCROLL REVEAL ANIMATION
========================================================== */

const hiddenElements = document.querySelectorAll(".hidden");

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

hiddenElements.forEach((element) => {

    revealObserver.observe(element);

});


/* ==========================================================
        ACTIVE NAVIGATION LINK
========================================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/* ==========================================================
            SCROLL TO TOP BUTTON
========================================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================================================
            SMOOTH NAVIGATION
========================================================== */

document.querySelectorAll('nav a').forEach((link) => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const target = document.querySelector(

            link.getAttribute("href")

        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ==========================================================
            BUTTON HOVER EFFECT
========================================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-6px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});
/* ==========================================================
                CUSTOM CURSOR
========================================================== */

const cursorDot = document.querySelector(".cursor-dot");
const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";

    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";

});

/* Hover Effect */

document.querySelectorAll("a, button").forEach((item) => {

    item.addEventListener("mouseenter", () => {

        cursorGlow.style.width = "60px";
        cursorGlow.style.height = "60px";

    });

    item.addEventListener("mouseleave", () => {

        cursorGlow.style.width = "35px";
        cursorGlow.style.height = "35px";

    });

});


/* ==========================================================
                FLOATING PARTICLES
========================================================== */

const particleContainer = document.getElementById("particles");

function createParticle() {

    const particle = document.createElement("span");

    const size = Math.random() * 6 + 3;

    particle.style.position = "absolute";
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.borderRadius = "50%";
    particle.style.background = "rgba(139,92,246,0.35)";
    particle.style.left = Math.random() * window.innerWidth + "px";
    particle.style.top = window.innerHeight + "px";
    particle.style.pointerEvents = "none";

    particleContainer.appendChild(particle);

    const duration = Math.random() * 4000 + 4000;

    particle.animate(

        [
            {
                transform: "translateY(0px)",
                opacity: 0
            },
            {
                opacity: 1
            },
            {
                transform: `translateY(-${window.innerHeight + 200}px)`,
                opacity: 0
            }

        ],

        {

            duration: duration,
            easing: "linear"

        }

    );

    setTimeout(() => {

        particle.remove();

    }, duration);

}

setInterval(createParticle, 250);


/* ==========================================================
                IMAGE HOVER EFFECT
========================================================== */

document.querySelectorAll(".project-card img").forEach((img) => {

    img.addEventListener("mouseenter", () => {

        img.style.filter = "brightness(110%)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.filter = "brightness(100%)";

    });

});


/* ==========================================================
                CONSOLE MESSAGE
========================================================== */

console.log("%c👋 Welcome to Sima Mori Portfolio",
    "color:#8b5cf6;font-size:18px;font-weight:bold;");

console.log("%cDeveloped with HTML, CSS & JavaScript",
    "color:#06b6d4;font-size:14px;");


/* ==========================================================
                WINDOW RESIZE
========================================================== */

window.addEventListener("resize", () => {

    progressBar.style.width = "0%";

});


/* ==========================================================
                PAGE VISIBILITY
========================================================== */

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        document.title = "👋 Come Back!";

    } else {

        document.title = "Sima Mori | Full Stack Developer";

    }

});


/* ==========================================================
                PAGE LOADED
========================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* ==========================================================
                END OF FILE
========================================================== */