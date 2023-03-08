export function cardTemplate({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
    return `
        <a class='photo-card__link' href="${largeImageURL}">
            <div class='photo-card__container'>
                <img class='photo-card__img' src='${webformatURL}' alt='${tags}' loading='lazy' />
                <div class='info'>
                    <p class='info-item'>
                        <b>Likes</b>
                        ${likes}
                    </p>
                    <p class='info-item'>
                        <b>Views</b>
                        ${views}
                    </p>
                    <p class='info-item'>
                        <b>Comments</b>
                        ${comments}
                    </p>
                    <p class='info-item'>
                        <b>Downloads</b>
                        ${downloads}
                    </p>
                </div>
            </div>
        </a>
    `;
}