import { combineReducers } from "redux";
import book from "./book.reducer";
import notice from "./notice.reducer";
import order from "./order.reducer";
import bill from "./bill.reducer";

const rootReducer = combineReducers({
	book,
	order,
	notice,
	bill,
});

export default rootReducer;
