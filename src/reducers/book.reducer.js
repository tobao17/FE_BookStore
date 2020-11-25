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

		default:
			return { ...state };
	}
};

export default bookReducer;
