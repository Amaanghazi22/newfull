const staticData = [
    { title: "Title 1", description: "Description 1" },
    { title: "Title 2", description: "Description 2" },
    { title: "Title 3", description: "Description 3" },
    { title: "Title 4", description: "Description 4" },
    { title: "Title 5", description: "Description 5" },
    { title: "Title 6", description: "Description 6" },
    { title: "Title 7", description: "Description 7" },
    { title: "Title 8", description: "Description 8" },
    { title: "Title 9", description: "Description 9" },
    { title: "Title 10", description: "Description 10" },
];

function reload() {
    window.location.reload();
}

window.addEventListener('load', () => fetchStaticData());

function fetchStaticData() {
    bindData(staticData);
}

function bindData(articles) {
    const cardsContainer = document.getElementById('cards-container');
    const newsCardTemplate = document.getElementById('template-news-card');

    // For a new set of cards, replacing old cards.
    cardsContainer.innerHTML = '';

    articles.forEach(article => {
        // For every dynamic creation of every div in the template tag.
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector('#news-img');
    const newsTitle = cardClone.querySelector('#news-title');
    const newsSource = cardClone.querySelector('#news-source');
    const newsDesc = cardClone.querySelector('#news-desc');

    newsImg.src = "https://via.placeholder.com/400x200"; // Replace with actual image source
    newsTitle.innerHTML = article.title;

    // You can customize the static data for the description as needed.
    newsDesc.innerHTML = article.description;

    newsSource.innerHTML = ""; // Replace with actual source and date information.

    cardClone.firstElementChild.addEventListener('click', () => {
        // _blank means opening a new tab.
        // Here, you can customize the behavior when a card is clicked.
        console.log("Card clicked!");
    });
}

// ... (previous JavaScript code) ...

const searchCardsText = document.getElementById('search-cards-text');
const searchCardsButton = document.getElementById('search-cards-button');

searchCardsButton.addEventListener('click', () => {
    const query = searchCardsText.value.trim().toLowerCase();
    if (!query) {
        fetchStaticData();
        return;
    }

    const filteredData = staticData.filter(article => {
        return article.title.toLowerCase().includes(query) || article.description.toLowerCase().includes(query);
    });

    bindData(filteredData);
});

// ... (remaining JavaScript code) ...

