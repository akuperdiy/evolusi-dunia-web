/**
 * Timeline JavaScript - Enhanced Interactions
 * Handles sidebar navigation, scroll effects, and card animations
 */

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const cards = document.querySelectorAll('.timeline-card');

    // 1. Sidebar Active State on Scroll
    function updateActiveNav() {
        const scrollPos = window.scrollY + window.innerHeight / 3;

        let activeId = '';
        cards.forEach(card => {
            const cardTop = card.offsetTop;
            const cardHeight = card.offsetHeight;

            if (scrollPos >= cardTop && scrollPos < cardTop + cardHeight + 100) {
                activeId = '#' + card.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === activeId) {
                link.classList.add('active');
            }
        });
    }

    // 2. Card Entrance Animations
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        cardObserver.observe(card);
    });

    // 3. Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = 100;
                    window.scrollTo({
                        top: target.offsetTop - offset,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 4. Scroll event listener
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateActiveNav();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial call
    updateActiveNav();
});
