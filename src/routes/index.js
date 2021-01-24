import Header from "../templates/Header";
import SearchBar from "../templates/SearchBar";
import Pager from "../templates/Paginator";
import Home from "../pages/Home";
import Book  from "../pages/Book";
import Error404 from "../pages/Error404";
import getHash from "../util/getHash";
import resolveRoutes from "../util/resolveRoutes";

const routes = {
  "/": Home,
  "/:id": Book,
  "/favs": "Contact",
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");
  
  header.innerHTML = await Header();
  await SearchBar();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
  await Pager();
};


export default router;
