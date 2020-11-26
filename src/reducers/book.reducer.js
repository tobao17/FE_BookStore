const initialState = {
	books: [],
};

const bookReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_BOOKS": {
			//	const newlistBook = [...state.books];
			state.books = action.payload;
			return { ...state };
		}

		case "ADD_BOOk": {
			state.books.push(action.payload);
			console.log(state.books);
			return {
				...state,
			};
		}
		case "DELETE_BOOk": {
			const index = state.books.map((item, index) => {
				if (item.id === action.payload) return index;
			});
			state.books.splice(index, 1);

			return {
				...state,
			};
		}
		default:
			return { ...state };
	}
};

export default bookReducer;
