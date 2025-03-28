document.querySelector('.trigno-dropdown')?.addEventListener('click', () => {
  document.getElementById('trigno-myDropdown')!.classList.toggle('show-trigno');
});
document.querySelector('.func-dropdown')?.addEventListener('click', () => {
  document.getElementById('func-myDropdown')!.classList.toggle('show-func');
});
window.onclick = function (event: MouseEvent) {
  if (event.target instanceof HTMLElement) {
    const e1 = event.target.closest('.trigno-dropbtn');
    const e2 = event.target.closest('.func-dropbtn');
    if (!e1) {
      if (
        document
          .getElementById('trigno-myDropdown')
          ?.classList.contains('show-trigno')
      ) {
        document
          .getElementById('trigno-myDropdown')
          ?.classList.remove('show-trigno');
      }
    }

    if (!e2) {
      if (
        document
          .getElementById('func-myDropdown')
          ?.classList.contains('show-func')
      ) {
        document
          .getElementById('func-myDropdown')
          ?.classList.remove('show-func');
      }
    }
  }
};
