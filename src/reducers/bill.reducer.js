const initialState = {
	listBill: [],
};

const BillReducer = (state = initialState, action) => {
	//	console.log(action.payload);
	switch (action.type) {
		case "GET_BILLS": {
			//	const newlistBook = [...state.books];
			state.listBill = action.payload;
			return { ...state };
		}

		default:
			return { ...state };
	}
};

export default BillReducer;
