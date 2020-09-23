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
        if (scrollTop > lastScrollTop || scrollTop === 0){
          button.style.bottom="-60px";
          lastScrollTop = scrollTop;
        } else if ((lastScrollTop - scrollTop) > 1000){
          button.style.bottom="0";
        }
  })
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return false;
  }, false);
} else {
  button.style.visibility = 'hidden';
}
