document.addEventListener('DOMContentLoaded', () => {
    // Add fade-up class to elements we want to animate
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-buttons');
    heroElements.forEach((el, index) => {
        el.classList.add('fade-up');
        // Add a slight delay for staggered animation
        setTimeout(() => {
            el.classList.add('visible');
        }, 100 * index);
    });

    const aboutCard = document.querySelector('.about-card');
    if (aboutCard) {
        aboutCard.classList.add('fade-up');
    }

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => card.classList.add('fade-up'));

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (aboutCard) observer.observe(aboutCard);
    featureCards.forEach(card => observer.observe(card));

    // Parallax effect on mouse move for background orbs
    const orbs = document.querySelectorAll('.glow-orb');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;

        orbs.forEach((orb, index) => {
            const speed = index === 0 ? 30 : -40;
            const x = mouseX * speed;
            const y = mouseY * speed;
            orb.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
