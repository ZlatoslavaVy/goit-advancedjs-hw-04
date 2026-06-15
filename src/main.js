// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery, PER_PAGE } from './js/pixabay-api.js';
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

      if (page * PER_PAGE < data.totalHits) {
        showLoadMoreButton();
      } else {
        hideLoadMoreButton();
        // Повідомлення про кінець результатів тут можна не виводити,
        // бо користувач тільки-но зробив перший пошук.
      }
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
    const data = await getImagesByQuery(query, page);

    const cardHeight = createGallery(data.hits);
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    if (page * PER_PAGE < data.totalHits) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }
};

// Прослуховуємо "Завантажити більше"
refs.loadMoreBtn.addEventListener('click', onLoadMore);
