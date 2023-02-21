import { galleryItems } from './gallery-items.js';
// Change code below this line

function imageHTML(largeImageJpg, smallImageJpg, imageDescription) {
    const str = `
                    <li class="gallery__item">
                        <a class="gallery__link" href="${largeImageJpg}">
                            <img
                                class="gallery__image" 
                                src="${smallImageJpg}" 
                                alt="${imageDescription}"
                            />
                        </a>
                    </li>         
                `;
  return str;
}

//Main

const refs = {
  galleryUl: document.querySelector("ul.gallery"),
};

galleryItems.map((item) =>
  refs.galleryUl.insertAdjacentHTML(
    "beforeend",
    imageHTML(item.original, item.preview, item.description)
  )
);

const lightbox = new SimpleLightbox("ul.gallery a.gallery__link", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});