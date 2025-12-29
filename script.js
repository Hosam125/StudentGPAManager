// JavaScript for scroll animations using Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle intersection observer
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Adjust trigger point
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate'); // Add animate class on intersection
            }
        });
    }, observerOptions);

    // Observe hero headline (already existing)
    const heroHeadline = document.querySelector('.hero h1');
    observer.observe(heroHeadline);
    // Observe "Our Tracks" title
const ourTracksTitle = document.querySelector('.our-tracks');
observer.observe(ourTracksTitle);


    // Newly Added: Observe about section boxes
    const infoBoxes = document.querySelectorAll('.info-box');
    infoBoxes.forEach(box => observer.observe(box));
    

    // Newly Added: Observe summary section
    const summaryContainer = document.querySelector('.summary-container');
    observer.observe(summaryContainer);

    // Observe form section (already existing)
    const formSection = document.querySelector('.form-section');
    observer.observe(formSection);

    // Newly Added: Matrix Code Rain Effect (Updated for Subtle CS/Coding Background)
    // Creates vertical falling code snippets (e.g., 'function', 'var', 'if') for a coding vibe, lightweight and subtle
    const matrixCanvas = document.getElementById('matrix-canvas');
    const matrixCtx = matrixCanvas.getContext('2d');
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;

    const codeSnippets = ['function', 'var', 'if', 'else', 'for', 'while', 'return', 'console.log']; // Subtle code words
    const fontSize = 14;
    const columns = matrixCanvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
        matrixCtx.fillStyle = 'rgba(43, 43, 43, 0.05)'; // Fade effect for trail
        matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        matrixCtx.fillStyle = Math.random() > 0.5 ? '#B10422' : '#00FF00'; // Random red or green glow
        matrixCtx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
            matrixCtx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    

    setInterval(drawMatrix, 100); // Slightly slower for performance, subtle motion

    // Newly Added: Particles Around Buttons
    // Creates small glowing dots that cluster around buttons and move slightly on hover
    function createParticles(buttonId) {
        const button = document.getElementById(buttonId);
        const particles = [];
        const numParticles = 10;

        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            button.appendChild(particle);
            particles.push(particle);
        }

        button.addEventListener('mouseenter', () => {
            particles.forEach(p => {
                p.style.animation = 'particle-move 2s infinite ease-in-out';
            });
        });

        button.addEventListener('mouseleave', () => {
            particles.forEach(p => {
                p.style.animation = 'none';
            });
        });
    }

    createParticles('book-call-btn');
    createParticles('submit-btn');



    // Newly Added: Portal Entrance Animation Trigger
    // On page load, the portal animates open, revealing the digital world behind it
    // After animation completes, remove the portal to allow normal interaction
    const portal = document.getElementById('portal');
    portal.addEventListener('animationend', function() {
        portal.style.display = 'none'; // Hide portal after opening
        // Trigger hero animation after portal opens for seamless reveal
        setTimeout(() => {
            const hero = document.querySelector('.hero');
            hero.classList.add('animate'); // Animate both h1 and subheading
        }, 500); // Slight delay for cinematic feel
    });
});

document.getElementById('book-call-btn').addEventListener('click', function() {
    document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
});

// JS Counter Animation
const counters = document.querySelectorAll('.count');
counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200;
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    }
    updateCounter();
});

// Smooth scroll for links
document.querySelectorAll('.nav-link, #book-call-btn').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const target = this.getAttribute('href');
        if (target.startsWith('#')) {
            document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Show/hide button & scroll to top
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) backToTop.style.display = 'block';
    else backToTop.style.display = 'none';
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function showSuccessMessage() {
    const msg = document.getElementById('successMessage');
    msg.style.display = 'block';
}
document.addEventListener('DOMContentLoaded', () => {

    const chatToggle = document.getElementById('chat-toggle');
    const chatBot = document.getElementById('chatbot');
    const chatClose = document.getElementById('chat-close');
    const chatBody = document.getElementById('chatBody');

    if (!chatToggle || !chatBot) {
        console.log("Chat elements not found");
        return;
    }

    chatToggle.onclick = () => {
        chatBot.classList.toggle('active');
    };

    chatClose.onclick = () => {
        chatBot.classList.remove('active');
    };

    const answers = {
        services: `
        <div class="bot-msg">
        🚀 We offer Web, Mobile, AI, Cloud, Automation & Game Development.
        </div>
        `,
        tracks: `
        <div class="bot-msg">
        💻 Web, Mobile, Desktop, AI, DevOps & Automation tracks available.
        </div>
        `,
        contact: `
        <div class="bot-msg">
        📩 Use the contact form or Book a Call from the homepage.
        </div>
        `
    };

    document.querySelectorAll('.bot-options button').forEach(btn => {
        btn.addEventListener('click', () => {
            chatBody.innerHTML += answers[btn.dataset.answer];
        });
    });
});



