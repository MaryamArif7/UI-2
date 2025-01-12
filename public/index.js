function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));
    
    const activePage = document.getElementById(pageId);
    activePage.classList.remove('hidden');
  }
  