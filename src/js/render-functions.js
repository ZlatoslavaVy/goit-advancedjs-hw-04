// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

let exemplar = null;

export function createGallery(images) {
  const markup = images
    .map(image => {
      const {
        likes,
        views,
        comments,
        downloads,
        webformatURL,
        largeImageURL,
        tags,
      } = image;
      return `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}"/>
        </a>
        <div class="gallery-info">
          <p class="gallery-info-item">
            <b>Likes</b>
            ${likes}
          </p>
          <p class="gallery-info-item">
            <b>Views</b>
            ${views}
          </p>
          <p class="gallery-info-item">
            <b>Comments</b>
            ${comments}
          </p>
          <p class="gallery-info-item">
            <b>Downloads</b>
            ${downloads}
          </p>
        </div>
      </li>
    `;
    })
    .join('');
  refs.gallery.innerHTML = markup;
  if (exemplar) {
    exemplar.refresh();
  } else {
    exemplar = new SimpleLightbox('.gallery a', {
      captions: true,
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
  }
}

export function clearGallery() {
  refs.gallery.innerHTML = '';
}

export function showLoader() {
  refs.loader.classList.remove('is-hidden');
}

export function hideLoader() {
  refs.loader.classList.add('is-hidden');
}
