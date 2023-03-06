const BASE_URL = 'https://pixabay.com/api/';
const searchParams = new URLSearchParams({
    key: '34128058-61007cddafffab4d625916ab2',
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
    per_page: "40",
});

export class ImgsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    async function fetchImages() {
        const url = `${BASE_URL}?q=${this.searchQuery}&${searchParams}&page=${this.page}`;
        try {
            const response = await axios.get(url)
            .then(response => response.json())
            .then(({ images }) => {
                this.incrementPage();
                return images;
            });
        } catch (error) {
            Notify.info("Sorry, there are no images matching your search query. Please try again.");
        }
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}