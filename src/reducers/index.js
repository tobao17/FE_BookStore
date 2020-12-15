import { combineReducers } from "redux";
import book from "./book.reducer";
import notice from "./notice.reducer";

const rootReducer = combineReducers({
	book,
	notice,
});

export default rootReducer;
