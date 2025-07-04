const navLink = document.querySelectorAll('.nav-link');
const navSection = document.querySelectorAll('.nav-section');
const projects = document.getElementById('projects');
const bgShapes = document.querySelector('.background-shapes');

for (const [i] of navLink.entries()) {
  navLink[i].addEventListener('click', (e) => {
    e.preventDefault();
    navSection.forEach((list) => list.classList.remove('active-section'));
    navSection[i].classList.add('active-section');
    navLink.forEach((title) => title.classList.remove('active-nav'));
    navLink[i].classList.add('active-nav');
    if (bgShapes) {
      if (projects && projects.classList.contains('active-section')) {
        bgShapes.style.display = 'none';
      } else {
        bgShapes.style.display = 'block';
      }
    }
  })
}


const hireMeBtn = document.querySelector('.btn-style'); // Adjust selector if needed
const contactSection = document.querySelector('#contact');
const contactNavLink = document.querySelector('.contact'); // The nav-link that goes to contact

if (hireMeBtn && contactSection) {
  hireMeBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active from all sections & links
    navSection.forEach((section) => section.classList.remove('active-section'));
    navLink.forEach((link) => link.classList.remove('active-nav'));

    // Add active to contact section & its nav link
    contactSection.classList.add('active-section');
    if (contactNavLink) {
      contactNavLink.classList.add('active-nav');
    }

    // Handle background shapes visibility
    if (bgShapes) {
      if (projects && projects.classList.contains('active-section')) {
        bgShapes.style.display = 'none';
      } else {
        bgShapes.style.display = 'block';
      }
    }
  });
}


const title = document.querySelector('.hero-shot-title');

function startTypingAnimation() {
  title.classList.remove('animation-complete');
  title.style.animation = 'none';
  void title.offsetWidth;

  title.style.animation = 'typing 2.1s steps(7) forwards, blinkCursor 0.7s step-end infinite';

  setTimeout(() => {
    title.classList.add('animation-complete');
    title.style.animation = 'typing 2.1s steps(7) forwards';
  }, 3100);

  setTimeout(() => {
    startTypingAnimation();
  }, 4100);
}

startTypingAnimation();
