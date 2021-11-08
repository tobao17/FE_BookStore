import { combineReducers } from "redux";
import book from "./book.reducer";
import notice from "./notice.reducer";
import order from "./order.reducer";
import bill from "./bill.reducer";
import user from "./user.reducer";
import cart from "./cart.reducer";
import wishlist from "./wishlist";
const rootReducer = combineReducers({
	book,
	order,
	notice,
	bill,
	user,
	cart,
	wishlist,
});

export default rootReducer;
