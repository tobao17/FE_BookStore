const initialState = {
	listOrder: [],
};

const OrderReducer = (state = initialState, action) => {
	//	console.log(action.payload);
	switch (action.type) {
		case "GET_ORDERS": {
			//	const newlistBook = [...state.books];
			state.listOrder = action.payload;
			return { ...state };
		}
		case "SEARCH_ORDER": {
			const list = action.payload;
			return {
				...state,
				listOrder: list,
			};
		}
		case "UPDATE_ORDERS": {
			const list = [...state.listOrder];
			const index = list
				.map((item) => {
					return item._id;
				})
				.indexOf(action.payload._id);
			//get index state

			list[index] = action.payload;
			return {
				...state,
				listOrder: list,
			};
		}
		default:
			return { ...state };
	}
};

export default OrderReducer;
