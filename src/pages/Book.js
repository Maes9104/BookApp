import getHash from '../util/getHash';
import getData from '../util/getData';
function test () {
	console.log('test');
}

const Book = async () => {
	const id = getHash();
	const getBook = await getData(`id=${id}`);
	const book = getBook[0];
	const view = `
		<div class="Book-inner">
			<article class="Books-card">
				<img src="${book.cover}" alt="${book.title}">
				<h2>${book.title}</h2>
				<i class="like fa fa-heart-o fa-lg"></i>
				<i class="like fa fa-heart fa-lg" style="display:none"></i>
			</article>
			<article class="Books-about">
				<h3>Author: <span>${book.author}</span></h3>
				<h3>Language: <span>${book.language}</span></h3>
				<h3>Publisher: <span>${book.publisher}</span></h3>
				<h3>Pages: <span>${book.pages}</span></h3>
				<h3>Publish Date: <span>${book.publisher_date}</span></h3>
				<h3>Summary:</h3> <p>${book.content}</p>
				<h3>Categories: </h3> <ul>
					${book.categories.map((cat) => `<li>${cat.name}</li>`).join("")}
				</ul>
				<h3>Tags: </h3> <ul>
					${book.tags.map((tag) => `<li>${tag.name}</li>`).join("")}
				</ul>
			</article>
		</div>
	`;
	
	return view;
};

export default Book;
