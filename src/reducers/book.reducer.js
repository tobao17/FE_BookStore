const initialState = {
	books: [],
};

const bookReducer = (state = initialState, action) => {
	//	console.log(action.payload);
	switch (action.type) {
		case "GET_BOOKS": {
			//	const newlistBook = [...state.books];
			state.books = action.payload;
			return { ...state };
		}
		// case "NOTICE": {
		// 	//	const newlistBook = [...state.books];
		// 	const noticemsg = [];
		// 	if (action.payload.title) {
		// 		noticemsg.push(action.payload);
		// 	}

		// 	return { ...state, notice: noticemsg };
		// }
		case "ADD_BOOk": {
			const list = [...state.books];
			list.push(action.payload);
			return {
				...state,
				books: list,
			};
		}

		case "SEARCH_BOOk": {
			const list = action.payload;
			return {
				...state,
				books: list,
			};
		}
		case "EDIT_BOOK": {
			const list = [...state.books];
			const index = list
				.map((item) => {
					return item._id;
				})
				.indexOf(action.payload._id); //get index state
			list[index] = action.payload;
			//state.books.push(action.payload);
			//console.log(state.books);
			return {
				...state,
				books: list,
			};
		}

		case "DELETE_BOOk": {
			const list = [...state.books];
			//console.log(list);
			console.log(action.payload);
			const index = list
				.map((item) => {
					return item._id;
				})
				.indexOf(action.payload);
			//	if (item.id === action.payload) return index;
			console.log(index);
			list.splice(index, 1);

			return {
				...state,
				books: list,
			};
		}
		default:
			return { ...state };
	}
};

export default bookReducer;
