import React, { Suspense } from "react";
import Admin from "./features/Admin/page/index";
import ForgotPass from "./features/Shop/ForgetPassWord/index";
import NotFound from "./components/NotFound/index";
import Login from "./features/Shop/Login";
import { ConfirmProvider } from "material-ui-confirm";
import { Redirect, BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
	return (
		<>
			<ConfirmProvider>
				<Suspense fallback={<div>Loading ...</div>}>
					<BrowserRouter>
						<Switch>
							<Redirect exact from="/" to="/admin/book" />
							<Route path="/admin" component={Admin} />
							<Route path="/forgotpass/:token" component={ForgotPass} />
							<Route path="/sign-in" component={Login} />
							<Route component={NotFound} />
						</Switch>
					</BrowserRouter>
				</Suspense>
			</ConfirmProvider>
		</>
	);
}

export default App;
