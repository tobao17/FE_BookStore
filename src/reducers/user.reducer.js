const initialState = {
	listUser: [],
	nameLogin: "",
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
		case "DELETE_USER": {
			const list = [...state.listUser];
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
				listUser: list,
			};
		}

		case "SETNAME": {
			const name = action.payload;
			return {
				...state,
				nameLogin: name,
			};
		}
		default:
			return { ...state };
	}
};

export default UserReducer;
