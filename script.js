document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (name && email && subject && message) {
                // Simulate form submission
                contactForm.style.display = 'none';
                formFeedback.style.display = 'block';
                
                console.log('Form Submitted:', { name, email, subject, message });
            }
        });
    }

    // Add active class to nav links based on current page
    const currentLocation = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentLocation) {
            link.classList.add('active');
        } else if (currentLocation === '' && linkPath === 'index.html') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
