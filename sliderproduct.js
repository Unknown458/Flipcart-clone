var swiper = new Swiper(".mySwiper8", {
    slidesPerView: 3.4,
    spaceBetween: 15,
       navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".mySwiper9", {
    slidesPerView: 6,
    spaceBetween: 15,
    autoHeight: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    var lazyImages = document.querySelectorAll("#lazyImage");
    var observers = [];
  
    lazyImages.forEach(function (image, index) {
      var uniqueId = "lazyImage" + (index + 1);
      image.setAttribute("id", uniqueId);
  
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.src = entry.target.getAttribute("data-src");
            entry.target.style.filter = "none";
            observers[index].unobserve(entry.target);
          }
        });
      });
  
      observer.observe(image);
      observers.push(observer);
    });
  });