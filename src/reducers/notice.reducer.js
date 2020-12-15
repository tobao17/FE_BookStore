const initialState = {
	msg: [],
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
		default:
			return { ...state };
	}
};

export default noticeReducer;
