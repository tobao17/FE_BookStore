import React from "react";
import { Route, Switch } from "react-router-dom";
import Shop from "./features/Shop";
// import Admin from "./features/Admin/page/index";
// import ResetPass from "./features/Shop/ForgetPassWord/index";
// import NotFound from "./components/NotFound/index";
// import Login from "./features/Shop/Login";
// import { ConfirmProvider } from "material-ui-confirm";
// import { Redirect, BrowserRouter, Route, Switch } from "react-router-dom";
// import ForgotPass from "./features/Shop/ForgetPass";

// import orderApi from "./api/orderApi";

function App() {
	return (
		<>
			{/* <ConfirmProvider> */}
			<Switch>
				<Route path="/" component={Shop}></Route>
			</Switch>

			{/* <Switch>
							<Redirect exact from="/" to="/sign-in" />
							<Route path="/admin" component={Admin} />
							<Route path="/forgotpass/:token" component={ResetPass} />
							<Route path="/sign-in" component={Login} />
							<Route path="/forgotpassword" component={ForgotPass} />
							<Route component={NotFound} />
						</Switch> */}

			{/* </ConfirmProvider> */}
		</>
	);
}
export default App;
