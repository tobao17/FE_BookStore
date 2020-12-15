import { combineReducers } from "redux";
import book from "./book.reducer";
import notice from "./notice.reducer";
import order from "./order.reducer";

const rootReducer = combineReducers({
	book,
	order,
	notice,
});

export default rootReducer;
