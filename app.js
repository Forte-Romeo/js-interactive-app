// ==========================
// TMDB CONFIG
// ==========================

const API_KEY = "YOUR_TMDB_API_KEY";

const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

// ==========================
// DOM ELEMENTS
// ==========================

const upcomingContainer =
    document.getElementById("upcomingContainer");

const trendingMoviesContainer =
    document.getElementById("trendingMoviesContainer");

const trendingTVContainer =
    document.getElementById("trendingTVContainer");

const searchResultsContainer =
    document.getElementById("searchResultsContainer");

const searchBtn =
    document.getElementById("searchBtn");

const mainSearch =
    document.getElementById("mainSearch");

const headerSearch =
    document.getElementById("headerSearch");

const headerSearchBtn =
    document.getElementById("headerSearchBtn");

const modal =
    document.getElementById("movieModal");

const modalBody =
    document.getElementById("modalBody");

const closeModal =
    document.getElementById("closeModal");

// ==========================
// FETCH DATA
// ==========================

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        return await response.json();
    } 
    catch (error) {
        console.error(error);
    }
}

// ==========================
// CREATE CARD
// ==========================

function createCard(item) {
    const title =
        item.title ||
        item.name ||
        "Unknown Title";

    const year =
        item.release_date?.slice(0, 4) ||
        item.first_air_date?.slice(0, 4) ||
        "N/A";

    const rating =
        item.vote_average
            ? item.vote_average.toFixed(1)
            : "N/A";

    const description =
        item.overview ||
        "No description available.";

    const image =
        item.poster_path
            ? `${IMAGE_URL}${item.poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Image";

    const card = document.createElement("div");

    card.classList.add("movie-card");

    card.innerHTML = `
        <img
            src="${image}"
            alt="${title}"
            class="movie-poster"
        >

        <div class="movie-info">

            <h3 class="movie-title">
                ${title}
            </h3>

            <div class="movie-meta">

                <span>${year}</span>

                <span class="movie-rating">
                    ⭐ ${rating}
                </span>

            </div>

            <p class="movie-description">
                ${description}
            </p>

        </div>
    `;

    card.addEventListener("click", () => {
        openModal(item);
    });

    return card;
}

// ==========================
// RENDER CARDS
// ==========================

function renderCards(data, container) {
    container.innerHTML = "";
    data.forEach(item => {
        container.appendChild(
            createCard(item)
        );
    });
}

// ==========================
// UPCOMING MOVIES
// ==========================

async function loadUpcomingMovies() {
    const url =
        `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`;
    const data =
        await fetchData(url);
    if (data?.results) {
        renderCards(
            data.results,
            upcomingContainer
        );
    }
}

// ==========================
// TRENDING MOVIES
// ==========================

async function loadTrendingMovies() {
    const url =
        `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;
    const data =
        await fetchData(url);
    if (data?.results) {
        renderCards(
            data.results,
            trendingMoviesContainer
        );
    }
}

// ==========================
// TRENDING TV SHOWS
// ==========================

async function loadTrendingTVShows() {
    const url =
        `${BASE_URL}/trending/tv/week?api_key=${API_KEY}`;
    const data =
        await fetchData(url);
    if (data?.results) {
        renderCards(
            data.results,
            trendingTVContainer
        );
    }
}

// ==========================
// SEARCH MOVIES & TV SHOWS
// ==========================

async function searchMedia(query) {
    if (!query.trim()) return;
    const url =
        `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
    const data =
        await fetchData(url);

    if (data?.results) {
        renderCards(
            data.results,
            searchResultsContainer
        );
        document
            .querySelector(".search-results")
            .scrollIntoView({
                behavior: "smooth"
            });
    }
}

// ==========================
// SEARCH EVENTS
// ==========================

searchBtn.addEventListener("click", () => {
    searchMedia(
        mainSearch.value
    );
});

mainSearch.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        searchMedia(
            mainSearch.value
        );
    }
});

headerSearchBtn.addEventListener("click", () => {
    searchMedia(
        headerSearch.value
    );
});

headerSearch.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        searchMedia(
            headerSearch.value
        );
    }
});

// ==========================
// MODAL
// ==========================

function openModal(item) {
    const title =
        item.title ||
        item.name;

    const image =
        item.poster_path
            ? `${IMAGE_URL}${item.poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Image";

    const rating =
        item.vote_average
            ? item.vote_average.toFixed(1)
            : "N/A";

    const date =
        item.release_date ||
        item.first_air_date ||
        "Unknown";

    modalBody.innerHTML = `
        <div
            style="
            display:flex;
            flex-wrap:wrap;
            gap:30px;
            "
        >

            <img
                src="${image}"
                alt="${title}"
                style="
                width:300px;
                border-radius:12px;
                "
            >

            <div
                style="
                flex:1;
                "
            >

                <h2>
                    ${title}
                </h2>

                <br>

                <p>
                    <strong>Release Date:</strong>
                    ${date}
                </p>

                <br>

                <p>
                    <strong>Rating:</strong>
                    ⭐ ${rating}
                </p>

                <br>

                <p>
                    ${item.overview}
                </p>

            </div>

        </div>

    `;

    modal.style.display = "flex";
}

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// ==========================
// CAROUSEL BUTTONS
// ==========================

const prevButtons =
    document.querySelectorAll(".prev-btn");

const nextButtons =
    document.querySelectorAll(".next-btn");

prevButtons.forEach(button => {
    button.addEventListener("click", () => {
        const carousel =
            button
                .closest(".section-header")
                .nextElementSibling;

        carousel.scrollBy({
            left: -500,
            behavior: "smooth"
        });
    });
});

nextButtons.forEach(button => {
    button.addEventListener("click", () => {
        const carousel =
            button
                .closest(".section-header")
                .nextElementSibling;

        carousel.scrollBy({
            left: 500,
            behavior: "smooth"
        });
    });
});

// ==========================
// LOADING SKELETONS
// ==========================

function createSkeletons(container) {
    for (let i = 0; i < 8; i++) {
        const skeleton =
            document.createElement("div");

        skeleton.classList.add(
            "movie-card",
            "skeleton"
        );

        skeleton.style.height =
            "500px";

        container.appendChild(
            skeleton
        );
    }
}

// ==========================
// INITIAL LOAD
// ==========================

async function initializeApp() {
    createSkeletons(
        upcomingContainer
    );

    createSkeletons(
        trendingMoviesContainer
    );

    createSkeletons(
        trendingTVContainer
    );

    await Promise.all([

        loadUpcomingMovies(),
        loadTrendingMovies(),
        loadTrendingTVShows()

    ]);
}

initializeApp();