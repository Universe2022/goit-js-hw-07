import { galleryItems } from "./gallery-items.js";
// Change code below this line

function imageHTML(largeImageJpg, smallImageJpg, imageDescription) {
  const str = `<div class="gallery__item">
            <a class="gallery__link" href="${largeImageJpg}">
                <img
                    class="gallery__image"
                    src="${smallImageJpg}"
                    data-source="${largeImageJpg}"
                    alt="${imageDescription}"
                />
            </a>
        </div>`;
  return str;
}

function onOpenModal(event) {
  event.preventDefault();
  if (event.target.className === "gallery__image") {
    refs.modalElement.src = event.target.getAttribute("data-source");
    modal.show(() => console.log("lightbox now visible"));
  }
}

function onCloseModal(event) {
  const ESC_KEY_CODE = "Escape";
  const isEscPress = event.code === ESC_KEY_CODE;
  if (isEscPress && modal.visible()) {
    modal.close(() => console.log("lightbox not visible anymore"));
  }
}

//Main

const events = {
  eventKeydown: "keydown",
  eventClick: "click",
};


const modal = basicLightbox.create(`<img>`, {
  onShow: () => refs.galleryDiv.addEventListener(events.eventKeydown, onCloseModal),
  onClose: () =>
    refs.galleryDiv.removeEventListener(events.eventKeydown, onCloseModal),
});


const refs = {
  galleryDiv: document.querySelector("div.gallery"),
  modalElement: modal.element().querySelector("img"),
};

galleryItems.map((item) =>
  refs.galleryDiv.insertAdjacentHTML(
    "beforeend",
    imageHTML(item.original, item.preview, item.description)
  )
);

refs.galleryDiv.addEventListener("click", onOpenModal);
