// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active', !isActive);
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate', 'revealed');
            
            // Special handling for section titles with text reveal
            if (entry.target.classList.contains('section-title')) {
                const titleLines = entry.target.querySelectorAll('.title-line');
                titleLines.forEach((line, index) => {
                    setTimeout(() => {
                        line.classList.add('revealed');
                    }, index * 100);
                });
            }
            
            // Stagger animation for grid items
            if (entry.target.parentElement.classList.contains('testimonials-grid') ||
                entry.target.parentElement.classList.contains('portfolio-grid') ||
                entry.target.parentElement.classList.contains('pricing-tiers') ||
                entry.target.parentElement.classList.contains('awards-grid')) {
                const siblings = Array.from(entry.target.parentElement.children);
                const index = siblings.indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 0.1}s`;
            }
        }
    });
}, observerOptions);

// Observe all elements that need scroll animation
document.addEventListener('DOMContentLoaded', () => {
    // Section titles (already have spans in HTML)
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        scrollObserver.observe(title);
    });
    
    // About text
    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
        scrollObserver.observe(aboutText);
    }
    
    // Testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        scrollObserver.observe(card);
    });
    
    // Portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        scrollObserver.observe(item);
    });
    
    // Pricing tiers
    const pricingTiers = document.querySelectorAll('.pricing-tier');
    pricingTiers.forEach(tier => {
        scrollObserver.observe(tier);
    });
    
    // Award items
    const awardItems = document.querySelectorAll('.award-item');
    awardItems.forEach(item => {
        scrollObserver.observe(item);
    });
    
    // FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.05}s`;
        scrollObserver.observe(item);
    });
    
    // Contact section
    const contactSection = document.querySelector('.contact');
    if (contactSection) {
        scrollObserver.observe(contactSection);
    }
});

// Enhanced navbar scroll effects
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const scrollProgress = Math.min(currentScroll / 200, 1);
    
    if (currentScroll > 50) {
        navbar.style.background = `rgba(255, 255, 255, ${0.95 + scrollProgress * 0.03})`;
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.boxShadow = `0 2px 20px rgba(0, 0, 0, ${0.05 * scrollProgress})`;
        navbar.style.borderBottomColor = `rgba(232, 232, 232, ${scrollProgress})`;
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = 'none';
        navbar.style.borderBottomColor = 'rgba(232, 232, 232, 0.5)';
    }
    
    lastScroll = currentScroll;
});

// Parallax effect for hero section
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = hero.querySelector('.hero-content');
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
        }
    });
}

// Enhanced portfolio item interactions
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.borderColor = '#000';
        const link = this.querySelector('.portfolio-link');
        if (link) {
            link.style.transform = 'translateX(8px)';
        }
    });
    
    // Add subtle tilt effect on mouse move
    item.addEventListener('mousemove', function(e) {
        if (!this.classList.contains('animate')) return;
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.borderColor = '';
        this.style.transform = '';
        const link = this.querySelector('.portfolio-link');
        if (link) {
            link.style.transform = 'translateX(0)';
        }
    });
});

// Smooth scroll with easing
function smoothScrollTo(target, duration = 1000) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;
    
    const targetPosition = targetElement.offsetTop - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function (ease-in-out-cubic)
        const ease = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
}

// Update smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        smoothScrollTo(target, 1000);
    });
});

// Add scroll progress indicator
const scrollProgress = document.createElement('div');
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    z-index: 9999;
    transform-origin: left;
    width: 0%;
    transition: width 0.1s ease-out;
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.pageYOffset;
    const progress = (scrolled / windowHeight) * 100;
    scrollProgress.style.width = `${progress}%`;
});

