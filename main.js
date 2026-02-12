// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('glass', 'shadow-sm', 'py-2');
        navbar.classList.remove('py-4');
    } else {
        navbar.classList.remove('glass', 'shadow-sm', 'py-2');
        navbar.classList.add('py-4');
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    if (mobileMenu.style.height === '0px' || mobileMenu.style.height === '') {
        mobileMenu.style.height = 'auto';
        gsap.fromTo(mobileMenu.children, {opacity: 0, y: -20}, {opacity: 1, y: 0, duration: 0.3, stagger: 0.1});
    } else {
        mobileMenu.style.height = '0px';
    }
});


// Hero Animations
const tl = gsap.timeline();

tl.to('.hero-elem', {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
})
.to('.hero-img', {
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: 'back.out(1.7)'
}, '-=0.8');

// Features Animation
gsap.utils.toArray('.feature-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.2,
        ease: 'power2.out'
    });
});

// Marquee Animation Clone
const marqueeContainer = document.querySelector('.marquee-container');
const marqueeContent = document.querySelector('.marquee-content');

// Clone content for seamless loop
const clone = marqueeContent.cloneNode(true);
marqueeContainer.appendChild(clone);

// Add animation class via JS to ensure it starts after load/clone
marqueeContainer.classList.add('animate-marquee');


// Product Showcase Animation
gsap.from('#ingredients img', {
    scrollTrigger: {
        trigger: '#ingredients',
        start: 'top 70%',
        scrub: 1
    },
    rotate: -15,
    y: 100
});

// Testimonials Animation
gsap.from('.testimonial-card', {
    scrollTrigger: {
        trigger: '#testimonials',
        start: 'top 80%'
    },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out'
});

// CTA Animation
gsap.from('#order h2, #order p, #order form', {
    scrollTrigger: {
        trigger: '#order',
        start: 'top 80%'
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
});
