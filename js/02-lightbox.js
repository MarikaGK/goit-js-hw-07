import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryDiv = document.querySelector("ul.gallery");

const secondGallery = galleryItems
  .map(
    (image) =>
      `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`
  )
  .join("");

galleryDiv.insertAdjacentHTML("afterbegin", secondGallery);

galleryDiv.addEventListener("click", openModal);

function openModal(e) {
  e.preventDefault();

  if (e.target.classList.contains("gallery__image")) {
    var lightbox = new SimpleLightbox(".gallery a", {
      nav: false,
      captions: true,
      captionsData: "alt",
      captiondelay: 250,
      showCounter: false,
    });

    const lightboxWrapper = document.querySelector(".sl-wrapper");
    const lightboxOverlay = document.querySelector(".sl-overlay");

    lightbox.on("close.simplelightbox", function () {
      lightboxWrapper.remove();
      lightboxOverlay.remove();
    });
  }
}
