// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Dark / Light Toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
});

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });
});

// Mobile Menu Toggle
const mobileBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.querySelector(".nav-links");
mobileBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

console.log("🔥 Portfolio Fully Loaded with Mobile Menu & Footer Social Links");

const canvas = document.getElementById('bgParticles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const colors = ['#3B82F6', '#22D3EE', '#F97316', '#E1306C'];
const maxDistance = 120;

// Mouse position
const mouse = {
  x: null,
  y: null,
  radius: 100
};

// Update mouse position
window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Wrap around edges
    if (this.x > canvas.width) this.x = 0;
    if (this.x < 0) this.x = canvas.width;
    if (this.y > canvas.height) this.y = 0;
    if (this.y < 0) this.y = canvas.height;

    // Interaction with mouse
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const distance = Math.sqrt(dx*dx + dy*dy);
    if(distance < mouse.radius) {
      const angle = Math.atan2(dy, dx);
      const force = (mouse.radius - distance)/mouse.radius;
      this.x += Math.cos(angle) * force * 3;
      this.y += Math.sin(angle) * force * 3;
    }
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    ctx.fill();
  }
}

// Create particles
for(let i = 0; i < 80; i++) {
  particlesArray.push(new Particle());
}

// Draw lines between close particles
function connectParticles() {
  for(let a = 0; a < particlesArray.length; a++) {
    for(let b = a+1; b < particlesArray.length; b++) {
      const dx = particlesArray[a].x - particlesArray[b].x;
      const dy = particlesArray[a].y - particlesArray[b].y;
      const distance = Math.sqrt(dx*dx + dy*dy);
      if(distance < maxDistance) {
        ctx.strokeStyle = `rgba(59,130,246, ${1 - distance/maxDistance})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0,0,canvas.width, canvas.height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  connectParticles();
  requestAnimationFrame(animate);
}
animate();

// Parallax subtle effect on scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  particlesArray.forEach(p => {
    p.y += scrollY * 0.0005; // very subtle
  });
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");

// إظهار الزر عند Scroll أكثر من 300px
window.addEventListener("scroll", () => {
  if(window.scrollY > 300) {
    backToTop.style.opacity = "1";
    backToTop.style.visibility = "visible";
  } else {
    backToTop.style.opacity = "0";
    backToTop.style.visibility = "hidden";
  }
});

// عند الضغط على الزر → Smooth Scroll للأعلى
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// Resize canvas on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
const translations = {
  en: {
    heroTitle: "Hi, I'm Hosam",
    heroSubtitle: "Creative Designer & Tech Branding Specialist",
    heroDesc: "I design modern logos and social media visuals that help brands stand out.",
    viewWork: "View My Work",
    contactMe: "Contact Me",
    portfolio: "Portfolio",
    logos: "Logos",
    socialPosts: "Social Media Posts",
    aboutTitle: "About Me",
    aboutDesc: "I’m a creative designer focused on clean and modern visuals. I help startups and businesses build strong brand identities.",
    servicesTitle: "Services",
    services: ["Logo Design", "Social Media Design", "Brand Identity", "Startup Branding"],
    contactTitle: "Contact",
    email: "Email: hosam@email.com",
    instagram: "Instagram: @hosam.design",
    whatsapp: "WhatsApp: +201234567890"
  },
  ar: {
    heroTitle: "مرحبًا، أنا حسام",
    heroSubtitle: "مصمم إبداعي ومتخصص في بناء العلامات التجارية التقنية",
    heroDesc: "أقوم بتصميم شعارات حديثة ومرئيات وسائل التواصل الاجتماعي التي تساعد العلامات التجارية على التميز.",
    viewWork: "عرض أعمالي",
    contactMe: "تواصل معي",
    portfolio: "أعمالي",
    logos: "الشعارات",
    socialPosts: "منشورات وسائل التواصل",
    aboutTitle: "عنّي",
    aboutDesc: "أنا مصمم إبداعي أركز على التصاميم النظيفة والحديثة. أساعد الشركات الناشئة على بناء هويات قوية للعلامة التجارية.",
    servicesTitle: "الخدمات",
    services: ["تصميم شعارات", "تصميم وسائل التواصل", "هوية العلامة التجارية", "بناء العلامة التجارية للشركات الناشئة"],
    contactTitle: "تواصل",
    email: "البريد الإلكتروني: hosam@email.com",
    instagram: "انستغرام: @hosam.design",
    whatsapp: "واتساب: +201234567890"
  }
};

// دالة تغيير اللغة
function setLanguage(lang) {
  document.querySelector('.lang-switcher .active')?.classList.remove('active');
  document.querySelector(`.lang-switcher button[onclick="setLanguage('${lang}')"]`).classList.add('active');

  document.querySelector('.hero h1').textContent = translations[lang].heroTitle;
  document.querySelector('.hero h2').textContent = translations[lang].heroSubtitle;
  document.querySelector('.hero p').textContent = translations[lang].heroDesc;
  document.querySelector('.btn').textContent = translations[lang].viewWork;
  document.querySelector('.btn.secondary').textContent = translations[lang].contactMe;

  document.querySelector('#portfolio h2').textContent = translations[lang].portfolio;
  document.querySelector('#portfolio h3:nth-of-type(1)').textContent = translations[lang].logos;
  document.querySelector('#portfolio h3:nth-of-type(2)').textContent = translations[lang].socialPosts;

  document.querySelector('section:nth-of-type(3) h2').textContent = translations[lang].aboutTitle;
  document.querySelector('section:nth-of-type(3) p').textContent = translations[lang].aboutDesc;

  document.querySelector('section:nth-of-type(4) h2').textContent = translations[lang].servicesTitle;
  document.querySelectorAll('section:nth-of-type(4) .card').forEach((el, i) => {
    el.textContent = translations[lang].services[i];
  });

  document.querySelector('#contact h2').textContent = translations[lang].contactTitle;
  const contactParas = document.querySelectorAll('#contact p');
  contactParas[0].textContent = translations[lang].email;
  contactParas[1].textContent = translations[lang].instagram;
  if(contactParas[2]) contactParas[2].textContent = translations[lang].whatsapp;
}
document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
