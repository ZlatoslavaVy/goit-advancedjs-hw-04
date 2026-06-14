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
    page++;
    const data = await getImagesByQuery(query, page);
    createGallery(data.hits);
    // let totalPages = data.totalHits / data.per_page;
    // if (page === totalPages) {
    //   refs.loadMoreBtn.classList.add('is-hidden');
    //   refs.loadMoreBtn.removeEventListener('click', onLoadMore);
    // }
  } catch (err) {
    console.log(err);
  }
};

// Прослуховуємо "Завантажити більше"
refs.loadMoreBtn.addEventListener('click', onLoadMore);
