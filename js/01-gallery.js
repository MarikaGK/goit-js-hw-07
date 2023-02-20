import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryDiv = document.querySelector("div.gallery");

const firstGallery = galleryItems
  .map(
    (image) => `<div class="gallery__item">
<a class="gallery__link" href="${image.original}">
  <img
    class="gallery__image"
    src="${image.preview}"
    data-source="${image.original}"
    alt="${image.description}"
  />
</a>
</div>`
  )
  .join("");

galleryDiv.insertAdjacentHTML("afterbegin", firstGallery);

galleryDiv.addEventListener("click", openModal);

function openModal(e) {
  e.preventDefault();

  if (e.target.classList.contains("gallery__image")) {
    
    const imageUrl = e.target.dataset.source;
    const instance = basicLightbox.create(
      `
      <img src="${imageUrl}" width="800" height="600">`,
      {
        onShow: () => {
          window.addEventListener("keydown", onEscKeydown);
        },
        onClose: () => {
          window.removeEventListener("keydown", onEscKeydown);
        },
      }
      );
      
      const onEscKeydown = (event) => {
        if (event.code === "Escape") {
          instance.close();
        }
      };

    instance.show();
  }
}
