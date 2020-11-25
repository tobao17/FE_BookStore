import React, { Suspense } from "react";
import Admin from "./features/Admin/page/MainPage";
import NotFound from "./components/NotFound/index";
import { Redirect, BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
	return (
		<>
			<Suspense fallback={<div>Loading ...</div>}>
				<BrowserRouter>
					<Switch>
						<Redirect exact from="/" to="/admin" />
						<Route path="/admin" component={Admin} />
						<Route path="/sign-in" component={Admin} />
						<Route component={NotFound} />
					</Switch>
				</BrowserRouter>
			</Suspense>
		</>
	);
}

export default App;
