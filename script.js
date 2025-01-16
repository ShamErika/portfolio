document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', () => {
      const heroHeight = document.querySelector('.hero').offsetHeight;
      if (window.scrollY > heroHeight) {
        navbar.style.display = 'block';
      } else {
        navbar.style.display = 'none';
      }
    });
  
    // Ensure navbar is hidden initially
    navbar.style.display = 'none';
  });

  
  document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelectorAll('.navbar a');
  
    navbarLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default anchor behavior
  
        const targetId = link.getAttribute('href').substring(1); // Get target id (e.g., "about")
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          // Scroll to the target section smoothly
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelectorAll('.navbar a');
  
    navbarLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
  
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'center', // Ensures horizontal alignment
          });
        }
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    // Reset scroll to the hero page
    window.scrollTo(0, 0);
  
    // Smooth navigation for navbar links
    const navbarLinks = document.querySelectorAll('.navbar a');
  
    navbarLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
  
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'center', // Align horizontally
          });
        }
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill-level');
  
    const animateSkillBars = () => {
      skillBars.forEach(skillBar => {
        const skillValue = skillBar.getAttribute('data-skill');
        skillBar.style.width = `${skillValue}%`;
      });
    };
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkillBars();
        }
      });
    });
  
    const skillsSection = document.getElementById('skills');
    observer.observe(skillsSection);
  });

  // Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
