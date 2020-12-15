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

		default:
			return { ...state };
	}
};

export default OrderReducer;
