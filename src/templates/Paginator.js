import Home from "../pages/Home";
import getData from "../util/getData";
import getHash from "../util/getHash";
import resolveRoutes from "../util/resolveRoutes";

const previewPage = async() => {
    let currentPage = parseInt(sessionStorage.getItem("currentPage"));
    if(currentPage === 0) {
        alert('Esta es la primer página');
        return;
    }
    changePage(currentPage-20);

}

const nextPage = async() => {
    let currentPage = parseInt(sessionStorage.getItem("currentPage"));
    changePage(currentPage+20);
}

const changePage = async (page) => {
    let categoryFilter = sessionStorage.getItem("category");
    let nameFilter = sessionStorage.getItem("bookName");
    const content = null || document.getElementById("content");
    content.innerHTML = await Home(categoryFilter !== "0" ? categoryFilter : null, nameFilter !== "0" ? nameFilter : null, page);
}


const Paginator = async () => {
    const view = `
        <section class="Books-pager">
            <button id="preview"><a>Preview</a></button>
            <button id="next"><a>Next</a></button>
        </section>`;
    const pager = document.getElementById("pager");
    pager.innerHTML = view;
    let hash = getHash();
    let route = await resolveRoutes(hash);
    if(route !== "/")
        pager.style.display = "none";
    else 
        pager.style.display = "block";

    let previewButton = document.getElementById("preview");
    let nextButton = document.getElementById("next");

    previewButton.addEventListener('click', previewPage);
    nextButton.addEventListener('click', nextPage)
}

export default Paginator;