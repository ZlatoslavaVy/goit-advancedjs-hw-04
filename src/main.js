// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

// Збираємо елементи
const refs = {
  form: document.querySelector('.form'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
};

let page = 1;
let query = '';
let totalPages;

// Прослуховуємо кнопку Search
refs.form.addEventListener('submit', event => {
  event.preventDefault();

  query = event.target.elements['search-text'].value.trim();
  page = 1;

  if (query === '') {
    return;
  }

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  getImagesByQuery(query, page)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        return;
      }
      createGallery(data.hits);
      hideLoadMoreButton();
      showLoadMoreButton();
    })
    .catch(error => console.log(error))
    .finally(() => {
      hideLoader();
    });
});

const onLoadMore = async () => {
  try {
    showLoader();
    hideLoadMoreButton();
    page++;
    console.log('запит page:', page);
    const data = await getImagesByQuery(query, page);
    console.log('отримано hits:', data.hits.length);
    createGallery(data.hits);
    totalPages = Math.ceil(data.totalHits / 15);
    if (page >= totalPages) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'bottomRight',
      });
    } else {
      showLoadMoreButton();
    }
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }
};

// Прослуховуємо "Завантажити більше"
refs.loadMoreBtn.addEventListener('click', onLoadMore);
