const initialState = {
	listUser: [],
	nameLogin: "",
};

const UserReducer = (state = initialState, action) => {
	//	console.log(action.payload);
	switch (action.type) {
		case "GET_USER": {
			//	const newlistBook = [...state.books];
			let listUser = action.payload;
			return {
				...state,
				listUser: listUser,
			};
		}
		case "SEARCH_USER": {
			const searchText = action.payload.keyword.toUpperCase();

			const list = [...state.listUser];

			const listUser = list.filter((item) => {
				if (item.username.toUpperCase().includes(searchText)) return item;
				if (item.address) {
					if (item.address.toUpperCase().includes(searchText)) return item;
				}
			}); // chua toi uu --> lam truoc chay do an--> quay lai sau

			return {
				...state,
				listUser: listUser,
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
