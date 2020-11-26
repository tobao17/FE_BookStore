export async function getBooks(books) {
	console.log("cccc" + books);
	return {
		type: "GET_BOOKS",
		payload: books,
	};
}
export async function addBooks(books) {
	return {
		type: "ADD_BOOk",
		payload: books,
	};
}
export async function deleteBooks(books) {
	return {
		type: "DeleteBook",
		payload: books,
	};
}
