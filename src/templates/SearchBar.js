import getData from "../util/getData";
import Home from "../pages/Home";

const selectCategory = async () => {
    let selectedCategory = document.getElementById("selectCategory").value;
    const content = null || document.getElementById("content");
    content.innerHTML = await Home(selectedCategory);
}

const searchTitle = async () => {
    let titleSearched = document.getElementById("search-input").value;
    if(titleSearched.length > 3 ){
        const content = null || document.getElementById("content");
        content.innerHTML = await Home(null, titleSearched);
    }
}

const SearchBar = async () => {
    const categories = await getData('get_categories=all');
    const searchBar = null || document.getElementById("searchBar");
    const view = `
        <article class="Books-search">
            <input type="text" placeholder="Busca tu libro favorito" name="search" id="search-input" />
            <i class="fa fa-search searchIcon"></i>
        </article>
        <select class="Categories" id="selectCategory">
            ${categories.map((category) => `
                <option value="${category.category_id}"> ${category.name}</option>
            ` ).join("")}
        </select>
    `;
    searchBar.innerHTML = view;
    const categorySearch = document.getElementById("selectCategory");
    categorySearch.addEventListener('change', selectCategory);
    const titleSearch = document.getElementById("search-input");
    titleSearch.addEventListener('keyup', searchTitle);

};

export default SearchBar;