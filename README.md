# 🎬 ForteFilms

A modern Movie & TV Show Discovery Web Application built with **HTML, CSS, and JavaScript**, powered by the **TMDB (The Movie Database) API**.

ForteFilms allows users to discover trending movies, browse upcoming releases, explore popular TV shows, and search through thousands of movies and series in real time.

---

# 📖 Overview

ForteFilms is a beginner-to-intermediate JavaScript project designed to practice real-world front-end development concepts such as:

* API Integration
* Asynchronous JavaScript
* DOM Manipulation
* Event Handling
* Dynamic Content Rendering
* Responsive Design
* Search Functionality
* Modal Components
* Carousel Navigation

The application fetches live data from TMDB and displays it in an intuitive streaming-platform-inspired interface.

---

# ✨ Features

## Header Navigation

* Responsive navigation menu
* Website branding/logo
* Quick search bar

---

## Discover Section

* Hero section
* Movie & TV show search functionality
* Real-time API search requests
* Smooth scrolling to search results

---

## Upcoming Movies & TV Shows

* Horizontal scrolling carousel
* Dynamic movie cards
* Movie posters
* Release year
* Ratings
* Short descriptions

---

## Trending Movies

* Weekly trending movies
* Dynamic card generation
* Clickable movie cards

---

## Trending TV Shows

* Weekly trending TV shows
* Dynamic card generation
* Responsive carousel layout

---

## Movie Details Modal

Clicking any movie card opens a modal displaying:

* Poster
* Title
* Release Date
* Rating
* Overview

---

## Loading Skeletons

While data is loading:

* Placeholder cards are displayed
* Improves user experience
* Simulates streaming platform behavior

---

## Responsive Design

Optimized for:

* Desktop
* Tablet
* Mobile Devices

---

# 🛠 Technologies Used

## Frontend

* HTML5
* CSS3
* JavaScript (ES6+)

---

## API

TMDB (The Movie Database) API

Used Endpoints:

### Search Movies & TV Shows

```javascript
/search/multi
```

### Upcoming Movies

```javascript
/movie/upcoming
```

### Trending Movies

```javascript
/trending/movie/week
```

### Trending TV Shows

```javascript
/trending/tv/week
```

---

## External Libraries

### Google Fonts

```text
Poppins
```

### Font Awesome

```text
Icons
```

---

# 📂 Project Structure

```text
js-interactive-app/

│
├── index.html
│
├── style.css
│
├── app.js
│
│
└── README.md
```

---

# 🚀 Installation

## 1. Clone Repository

```bash
git clone https://github.com/Forte-Romeo/js-interactive-app.git
```

---

## 2. Open Project

Open the project folder in:

```text
VS Code
```

---

## 3. Obtain TMDB API Key

Create a free account on TMDB.

Generate an API key from your account dashboard.

---

## 4. Configure API Key

Open:

```text
app.js
```

Replace:

```javascript
const API_KEY = "YOUR_TMDB_API_KEY";
```

with:

```javascript
const API_KEY = "YOUR_ACTUAL_API_KEY";
```

---

## 5. Run Project

Open:

```text
index.html
```

in your browser.

Alternatively use VS Code Live Server.

---

# 📚 JavaScript Concepts Practiced

This project demonstrates the following JavaScript concepts:

## Variables & Constants

```javascript
const API_KEY
```

---

## Functions

```javascript
function createCard()
```

---

## Arrays

```javascript
data.results.forEach()
```

---

## Objects

```javascript
movie.title
movie.vote_average
```

---

## DOM Manipulation

```javascript
document.createElement()
appendChild()
innerHTML
```

---

## Event Listeners

```javascript
addEventListener()
```

---

## Async/Await

```javascript
async function fetchData()
```

---

## Fetch API

```javascript
fetch()
```

---

## Template Literals

```javascript
`${movie.title}`
```

---

## Conditional Rendering

```javascript
movie.poster_path
    ? image
    : placeholder
```

---

## Dynamic UI Generation

Creating cards from API data.

---

# 🎯 Learning Outcomes

By completing this project, you will understand:

* How APIs work
* How to fetch external data
* How to build dynamic interfaces
* How to create reusable components
* How to manipulate the DOM efficiently
* How to handle user interactions
* How modern streaming websites structure their UI

---

# 🔮 Future Improvements

Possible upgrades include:

## User Features

* Favorites
* Watchlist
* User Accounts
* Authentication

---

## Search Improvements

* Live Search Suggestions
* Search History
* Advanced Filters

---

## Movie Features

* Genres
* Cast Information
* Trailers
* Similar Movies
* Recommendations

---

## UI Enhancements

* Dark/Light Mode
* Glassmorphism Components
* Improved Animations
* Skeleton Loading Enhancements

---

## Performance

* Lazy Loading Images
* Pagination
* Infinite Scroll
* Caching API Requests

---

# 🐞 Known Limitations

Current version:

* No authentication system
* No persistent favorites storage
* Limited movie detail information
* No trailer support
* No genre filtering

These features can be implemented in future releases.

---

# 🤝 Contributing

Contributions are welcome.

Steps:

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Add new feature"
```

4. Push changes

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

You are free to:

* Use
* Modify
* Distribute
* Learn from the code

for personal and commercial purposes.

---

# 🙏 Acknowledgements

Special thanks to:

* TMDB (The Movie Database)
* Font Awesome
* Google Fonts

for providing the tools and resources that make this project possible.

---

# 👨‍💻 Author

**Ferguson (Forte) Romeo**

Information Technology Student

Software + AI Engineer | Web Developer | Entrepreneur

Built as part of a JavaScript learning journey focused on creating real-world, portfolio-worthy projects.
