
$("#burger-menu").on("click", function(){
    $("#menu").toggleClass("open-menu");
    $("#socicon").toggleClass("open-socicon");
  })

  document.querySelector('.burger-icon').addEventListener('click',function() {
      document.querySelector('.header-wraper').classList.toggle('active');
      document.querySelector('.contact-section1').classList.toggle('active-1');
      document.querySelector('.contact-section2').classList.toggle('active-1');
      document.querySelector('.contact-section3').classList.toggle('active-1');
  })

