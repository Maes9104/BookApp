import getData from "../util/getData";

const Home = async (category, bookName, init) => {
	let books;
	if(category != null) {
		books = await getData(`category_id=${category}&results_range=${init != null ? init : 0 }&num_items=20`);
	}else if(bookName != null) {
		books = await getData(`book_title="${bookName}"&results_range=${init != null ? init : 0 }&num_items=20`);
	}else {
		books = await getData(`category_id=677&results_range=${init != null ? init : 0 }&num_items=20`);
	}
	sessionStorage.setItem('currentPage', init != null ? init : 0);
	sessionStorage.setItem('category', category != null ? category : 0);
	sessionStorage.setItem('bookName', bookName != null ? bookName: 0);


	if(books.length === 0) {
		const noResults = `
			<section class="Books">
				<h2>No se obtuvieron resultados :(</h2>
			</section>
		`;
		return noResults
	}

	const view = `
		<section class="Books">
			${books.map((book) =>`
				<article class="Book-item">
					<a href="#/${book.ID}/">
						<img src="${book.cover}" alt="${book.title}">
						<h2>${book.title}</h2>
					</a>
				</article>
			`).join("")}
		</section>
	`;
	return view;
};

export default Home;
