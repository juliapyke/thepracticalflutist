$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

//scroll to top button
const button = document.getElementsByClassName('scroll-to-top');
if ("scrollBehavior" in document.documentElement.style) {
  button[0].addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return false;
  }, false);
} else {
  button.style.visibility = 'hidden';
}
