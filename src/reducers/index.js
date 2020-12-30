import { combineReducers } from "redux";
import book from "./book.reducer";
import notice from "./notice.reducer";
import order from "./order.reducer";
import bill from "./bill.reducer";
import user from "./user.reducer";

const rootReducer = combineReducers({
	book,
	order,
	notice,
	bill,
	user,
});

export default rootReducer;
