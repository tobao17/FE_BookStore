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
		case "DELETE_BILL": {
			const list = [...state.listBill];
			//console.log(list);
			console.log(action.payload);
			const index = list
				.map((item) => {
					return item._id;
				})
				.indexOf(action.payload);
			//	if (item.id === action.payload) return index;
			//	console.log(index);
			list.splice(index, 1);

			return {
				...state,
				listBill: list,
			};
		}
		default:
			return { ...state };
	}
};

export default BillReducer;
