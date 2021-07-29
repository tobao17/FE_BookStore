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
		case "SEARCH_BILL": {
			const searchText = action.payload.keyword.toUpperCase();
			const list = [...state.listBill];
			const listBillFilter = list.filter((item) => {
				if (item.userName.toUpperCase().includes(searchText)) return item;
				if (item.Order.address.toUpperCase().includes(searchText))
					return item;
				if (
					item.Order._id
						.toString()
						.toUpperCase()
						.slice(20)
						.includes(searchText)
				)
					return item;
			}); // chua toi uu --> lam truoc chay do an--> quay lai sau
			console.log(listBillFilter);
			return {
				...state,
				listBill: listBillFilter,
			};
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
