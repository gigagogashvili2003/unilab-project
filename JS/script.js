//   when user clicks on burger-icon
// jquery

$("#burger-menu").on("click", function(){
    $("#menu").toggleClass("open-menu");
  })

//   when user clicks on burger-icon
  $(".burger-icon").on("click", function () {
      $(".header-wraper").toggleClass("active");
      $(".contact-section1").toggleClass("active-1");
      $(".contact-section2").toggleClass("active-1");
      $(".contact-section3").toggleClass("active-1");
      $(".section1").toggleClass("active-1");
      $(".section2").toggleClass("active-1");
      $(".section3").toggleClass("active-1");
      $(".avatar-svg").toggleClass("active-1");
  })
  // native javascript

  // time :)

  let clock = document.querySelector("#clock");
  let date = document.querySelector("#date")

setInterval(function() {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
});
setInterval(function() {
  let currentDate = new Date();
  date.innerHTML = currentDate.toLocaleDateString();
})


