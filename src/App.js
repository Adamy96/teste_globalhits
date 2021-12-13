import React from "react";
import { Routes } from "@components";
// import { ProductsProvider } from "@context/products";
import { AppContextProvider } from './AppContextProvider';
import "@design/main.scss";

// Tag test

function App() {
	return (
		<AppContextProvider>
			<div className='App'>
				<Routes />
			</div>
		</AppContextProvider>
	);
}

export default App;
