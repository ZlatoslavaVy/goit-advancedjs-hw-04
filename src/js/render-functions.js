// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const exemplar = new SimpleLightbox('.gallery a');
const refs = {
  gallery: document.querySelector('.gallery'),
};

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
  exemplar.refresh();
}

export function clearGallery() {
  refs.gallery.innerHTML = '';
}

export function showLoader() {
  // Implementation for showing loader
}

export function hideLoader() {
  // Implementation for hiding loader
}
