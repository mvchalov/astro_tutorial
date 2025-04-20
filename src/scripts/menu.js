document.querySelector('.hamburger')?.addEventListener('click', () => {
    console.log("fired")
    document.querySelector('nav')?.classList.toggle('expanded');
  });