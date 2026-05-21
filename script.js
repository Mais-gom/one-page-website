const galleryImage = document.querySelector(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImage.addEventListener("click", function() {
  lightbox.style.display = "block";
  lightboxImg.src = galleryImage.src;
});

closeBtn.addEventListener("click", function() {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", function(event) {
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
});