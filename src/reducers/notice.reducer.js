const initialState = {
	msg: [],
	msgOrder: [],
	msgOrderNew: [],
};
const noticeReducer = (state = initialState, action) => {
	//	console.log(action.payload);
	switch (action.type) {
		case "NOTICE": {
			const noticemsg = [];
			if (action.payload.title) {
				noticemsg.push(action.payload);
			}

			return { ...state, msg: noticemsg };
		}
		case "NOTICEORDER": {
			state.msgOrder = action.payload;
			return { ...state };
		}
		case "NOTICEORDER_NEW": {
			let ListOrderNew = [...state.msgOrderNew];
			console.log(ListOrderNew);
			ListOrderNew.push(action.payload);
			console.log(ListOrderNew.length);

			return { ...state, msgOrderNew: ListOrderNew };
		}
		default:
			return { ...state };
	}
};

export default noticeReducer;
