import {
  featureProductNav,
  fashionPro,
  fashionPro1,
  fashionPro0,
  fashionPro2,
  fashionPro3,
} from "./navproduct.js";

let contain_product = document.querySelector(".contain_product");
let conatainpro = "";
featureProductNav.forEach((el) => {
  let dropdownContent = "";
  let dropdownContent1 = "";

  if (el.name === "Fashion") {
    dropdownContent = fashionPro
      .map(
        (
          category
        ) => `<li class="dropdown-submenu"><a class="dropdown-item productli" href="#">${
          category.proname
        } <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" class="lucideproduct lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg></a>
           <ul class="submenu dropdown-menu prosubmenu show">
           ${
             category.topname
               ? `<li class="topname">${category.topname}</li>`
               : ""
           }
           ${
             category.subcategories
               ? category.subcategories
                   .map(
                     (subcategory) => `<li>
           <a class="dropdown-item productli5" href="#">${subcategory} </a></li>`
                   )
                   .join("")
               : ""
           }

           </ul>
      </li>`
      )
      .join("");
  } else if (el.name === "Electronics") {
    dropdownContent = fashionPro0
      .map(
        (
          category
        ) => `<li class="dropdown-submenu"><a class="dropdown-item productli" href="#">${
          category.proname
        } <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" class="lucideproduct lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg></a>
           <ul class="submenu dropdown-menu prosubmenu show">
           ${
             category.topname
               ? `<li class="topname">${category.topname}</li>`
               : ""
           }
           ${
             category.subcategories
               ? category.subcategories
                   .map(
                     (subcategory) => `<li>
           <a class="dropdown-item productli5" href="#">${subcategory} </a></li>`
                   )
                   .join("")
               : ""
           }

           </ul>
      </li>`
      )
      .join("");
  } else if (el.name === "Home & Furniture") {
    dropdownContent = fashionPro1
      .map(
        (
          category
        ) => `<li class="dropdown-submenu"><a class="dropdown-item productli" href="#">${
          category.proname
        } <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" class="lucideproduct lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg></a>
           <ul class="submenu dropdown-menu prosubmenu show">
           ${
             category.topname
               ? `<li class="topname">${category.topname}</li>`
               : ""
           }
           ${
             category.subcategories
               ? category.subcategories
                   .map(
                     (subcategory) => `<li>
           <a class="dropdown-item productli5" href="#">${subcategory} </a></li>`
                   )
                   .join("")
               : ""
           }

           </ul>
      </li>`
      )
      .join("");
  } else if (el.name === "Beauty, Toys & More") {
    dropdownContent = fashionPro2
      .map(
        (
          category
        ) => `<li class="dropdown-submenu"><a class="dropdown-item productli" href="#">${
          category.proname
        } <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" class="lucideproduct lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg></a>
           <ul class="submenu dropdown-menu prosubmenu show">
           ${
             category.topname
               ? `<li class="topname">${category.topname}</li>`
               : ""
           }
           ${
             category.subcategories
               ? category.subcategories
                   .map(
                     (subcategory) => `<li>
           <a class="dropdown-item productli5" href="#">${subcategory} </a></li>`
                   )
                   .join("")
               : ""
           }

           </ul>
      </li>`
      )
      .join("");
  } else if (el.name === "Two-Wheelers") {
    dropdownContent = fashionPro3
      .map(
        (
          category
        ) => `<li class="dropdown-submenu"><a class="dropdown-item productli" href="#">${category.proname} </a>
           
      </li>`
      )
      .join("");
  } else {
    dropdownContent = `<li><a class="dropdown-item" href="#">Default Item</a></li>`;
  }

  conatainpro += `
    <div class="product_item">
       <a class="aproduct" href="${el.link}">
          <div class="productimage_at">
             <img class="productimg"  src="${el.img}" alt="">
          </div>
          <div class="producttag_at"> 
             <span class="product_arrow">
                <span class="product_name">${el.name}</span>
                ${
                  el.subNavigation
                    ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucidepro lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>`
                    : ""
                }
             </span>
          </div>
       </a>
       ${
         el.subNavigation
           ? `<div class="hrloo">
          <ul class="dropdown-menu prodrop show">
             ${dropdownContent}
             ${
               dropdownContent1
                 ? `<div class="dropend">${dropdownContent1}</div>`
                 : ""
             }
          </ul>
       </div>`
           : ""
       }
    </div>`;
});

// Add event listeners to each .productli element

contain_product.innerHTML = conatainpro;

// slider---------------------------------------------

$(function () {
  var buttons = $(".coustom-pagination .button");

  function switchToNext(index) {
    if (buttons.eq(index).hasClass("active")) return false;
    else {
      buttons.removeClass("active");
      buttons.eq(index).addClass("active");

      // Update Swiper's active slide based on the clicked button's index
      swiper.slideTo(index);
    }
  }

  buttons.on("click", function () {
    var index = $(this).index();
    switchToNext(index);
  });

  // Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        // Update active button when the slide changes
        var activeIndex = swiper.activeIndex;
        switchToNext(activeIndex);
      },
    },
  });
});

var swiper = new Swiper(".mySwiper5", {
  slidesPerView: 5,
  spaceBetween: 15,
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper6", {
  slidesPerView: 6,
  spaceBetween: 15,
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper7", {
  slidesPerView: 3,
  spaceBetween: 15,
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//  lazyimage--------------------------------------------

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

// navbar----------------------------------------

$(function () {
  $("#navbar").load("./navbar.html");
});
