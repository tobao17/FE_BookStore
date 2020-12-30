const initialState = {
	listUser: [],
};

const UserReducer = (state = initialState, action) => {
	//	console.log(action.payload);
	switch (action.type) {
		case "GET_USER": {
			//	const newlistBook = [...state.books];
			state.listUser = action.payload;
			return { ...state };
		}
		case "SEARCH_ORDER": {
			const list = action.payload;
			return {
				...state,
				listUser: list,
			};
		}
		default:
			return { ...state };
	}
};

export default UserReducer;
