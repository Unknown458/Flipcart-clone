var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    direction: "vertical",
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 6.8,
        spaceBetween: 2,
      },
      1024: {
        slidesPerView: 6.8,
        spaceBetween: 2,
      },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });



  const smallImages = document.querySelectorAll('.swiper-slide #inner_img');

  // Get the large image container
  const largeImage = document.querySelector('.bigimage-pro .inner_componnet img');

  // Add event listeners to each small image
  smallImages.forEach((smallImage) => {
    smallImage.addEventListener('mouseover', () => {
      // Change the source of the large image when hovering over a small image
      largeImage.src = smallImage.src;
    });
  });

  // scroll-----------------------------------------------

  window.onscroll = function() {
    var productImage = document.getElementById("left-side");
    var productInfo = document.getElementById("right-side");

    var imageRect = productImage.getBoundingClientRect();
    var infoRect = productInfo.getBoundingClientRect();
   
    var add = 80;
     
    if (infoRect.bottom + add <= window.innerHeight ) {
      // Product info has reached the bottom, make image relative
      productImage.style.position = "absolute";
      productImage.style.top = "760px";
    } else {
      // Product info is above the bottom, make image fixed
      productImage.style.position = "fixed";
      productImage.style.top = "64px";
    }
  };





