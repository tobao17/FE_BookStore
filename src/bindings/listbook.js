import { defaults } from "chart.js";
import { connect } from "react-redux";
import ListTable from "../features/Admin/component/CustomerList/TableCustomer";
import { addBooks } from "../actions/books";
const mapStateToProps = (state) => {
	return {
		list: state.book.books,
	};
};
const mapActionToProps = {
	addBooks,
};
export default connect(mapStateToProps, mapActionToProps)(ListTable);
