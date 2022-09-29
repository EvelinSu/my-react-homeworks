import {combineReducers, legacy_createStore} from 'redux'
import {loadingReducer} from './loadingReducer'
import {themeReducer} from "../../h12/bll/themeReducer";
import chatReducer from "../../h1/chatReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    chat: chatReducer

})

const store = legacy_createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
