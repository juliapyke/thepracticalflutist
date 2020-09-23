$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

//scroll to top button
const button = document.getElementsByClassName('scroll-to-top')[0];
var lastScrollTop = 0;
if ("scrollBehavior" in document.documentElement.style) {
  window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document
      .documentElement.scrollTop;
        if (scrollTop > lastScrollTop){
          button.style.bottom="-60px";
        } else {
          button.style.bottom="0";
        }
        lastScrollTop = scrollTop;

  })
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return false;
  }, false);
} else {
  button.style.visibility = 'hidden';
}
