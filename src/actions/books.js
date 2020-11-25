export async function getBooks(books) {
	console.log("cccc" + books);
	return {
		type: "GET_BOOKS",
		payload: books,
	};
}
export async function addBooks(books) {
	return {
		type: "GET_BOOKS",
		payload: books,
	};
}
