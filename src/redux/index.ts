import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rootService } from "./api/apiRoot";


const reducers = {
	[rootService.reducerPath]: rootService.reducer
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const store = configureStore({
	reducer: combinedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
		rootService.middleware
	])
});

