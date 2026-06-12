import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const searchQuery = event.target.elements['search-text'].value.trim();

  if (searchQuery === '') {
    return;
  }

  clearGallery();

  getImagesByQuery(searchQuery)
    .then(data => {
      createGallery(data.hits);
    })
    .catch(error => console.log(error));
});
