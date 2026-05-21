const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg"
];

galleryImages.forEach(function(image) {
  image.addEventListener("click", function() {
    currentIndex = Number(image.getAttribute("data-index"));
    showImage();
  });
});

function showImage() {
  lightbox.style.display = "flex";
  lightboxImg.src = images[currentIndex];
}

function nextImage() {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  showImage();
}

function previousImage() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  showImage();
}

closeBtn.addEventListener("click", function() {
  lightbox.style.display = "none";
});

nextBtn.addEventListener("click", nextImage);

prevBtn.addEventListener("click", previousImage);

lightbox.addEventListener("click", function(event) {
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
});
