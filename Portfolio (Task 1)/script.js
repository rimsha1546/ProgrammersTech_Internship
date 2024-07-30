const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    if (scrollY >= sectionTop - sectionHeight / 3 && scrollY <= sectionTop + sectionHeight * 2 / 3) {
      const navLink = document.querySelector(nav [href="#${sectionId}"]);
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  });
});