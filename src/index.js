import './sass/common.scss';
import ImgsApiService from './js/imgs-service';
import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const searchForm = document.querySelector(".search-form");
const imgsApiService = new ImgsApiService();

searchForm.addEventListener('submit', onSearch);
loadMoreBtn.button.addEventListener('click', fetchImages);

function onSearch(e) {
    e.preventDefault();

    imgsApiService.query = e.currentTarget.elements.query.value;

    if (imgsApiService.query === '') {
        return;
    }
    
    fetchImages();
}