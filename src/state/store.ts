import {TasksActionTypes, tasksReducer,} from './tasks-reducer';
import {TodolistsActionTypes, todolistsReducer} from './todolists-reducer';
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {ApplicationActionTypes, appReducer} from './app-reducer';
import {LoginActionTypes, loginReducer} from './login-reducer';
import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
// import {rootReducer} from './reducers'

/*------------------------------------------------------------*/

// для React Redux DevTools Chrome
// declare global {
//     interface Window {
//         __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
// }

// для React Redux DevTools Chrome
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// добавляем composeEnhancers() для React Redux DevTools Chrome
// export const store = createStore(rootReducer, composeEnhancers());

/*------------------------------------------------------------*/

// hot reloading-replacement
/*if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer)
    })
}*/

/*------------------------------------------------------------*/
// REACT REDUX

// rootReducer без Hot Reloading
const rootReducer = combineReducers({
    todolists: todolistsReducer,
    tasks: tasksReducer,
    app: appReducer,
    auth: loginReducer
})

// react-redux store
// @ts-ignore // для Chrome Extension
export const store = legacy_createStore(rootReducer, /*composeEnhancers(*/applyMiddleware(thunkMiddleware))/*)*/;

// типизация state
export type AppRootStateType = ReturnType<typeof rootReducer>; // рабочий вариант
// export type AppRootStateType = ReturnType<typeof store.getState> // типизация из документации

// типизация Dispatch React-Redux
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, any>;

// типизация Thunk React-Redux
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionType>

// типизация всех экшенов для React-Redux
export type AppActionType =
    TodolistsActionTypes |
    TasksActionTypes |
    ApplicationActionTypes |
    LoginActionTypes;

/*------------------------------------------------------------*/

// @ts-ignore
window.store = store;