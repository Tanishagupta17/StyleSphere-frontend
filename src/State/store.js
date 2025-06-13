import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { thunk } from 'redux-thunk'
import authReducer from './auth/Reducer'
import customerProductReducer from './customer/Product/Reducer'
import cartReducer from './customer/Cart/Reducer'
import { orderReducer } from './customer/Order/Reducer'

const rootReducers = combineReducers({
    auth: authReducer,
    customersProduct: customerProductReducer,
    cart:cartReducer,
    order:orderReducer,
})
export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))