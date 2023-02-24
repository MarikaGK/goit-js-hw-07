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

var lightbox = new SimpleLightbox(".gallery a", {
  nav: false,
  captions: true,
  captionsData: "alt",
  captiondelay: 250,
  showCounter: false,
});

