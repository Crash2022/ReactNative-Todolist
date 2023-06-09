import {TodolistAPIType, todolistsAPI} from '../api/todolistsAPI';
import {AppInitialStateStatusType, appSetErrorAC, appSetStatusAC} from './app-reducer';
import {AppThunkType} from "./store";
import {handleServerNetworkError} from '../common/utils/errorUtils';

// reducer
export type FilterType = 'all' | 'active' | 'completed';

export type TodolistDomainType = TodolistAPIType & {
    filter: FilterType
    entityStatus: AppInitialStateStatusType
}

/*export let todolistId1 = v1();
export let todolistId2 = v1();

иной метод типизации initialState
type StateType = typeof initialState

const initialState: Array<TodolistDomainType> = [
    {id: todolistId1, title: 'Выучить', filter: 'all', addedDate: '', order: 0},
    {id: todolistId2, title: 'Купить', filter: 'all', addedDate: '', order: 1}
]*/

const initialState: Array<TodolistDomainType> = [];

export const todolistsReducer = (state: Array<TodolistDomainType> = initialState,
                                 action: TodolistsActionTypes): Array<TodolistDomainType> => {
    switch (action.type) {
        case 'DELETE_TODOLIST': {
            return state.filter(t => t.id !== action.id);
        }
        case 'CREATE_NEW_TODOLIST': {
            const newTodolist: TodolistDomainType = {...action.todolist, filter: 'all', entityStatus: 'idle'}
            return [newTodolist, ...state];

            // return [{
            //     id: action.todolistId, title: action.title,
            //     filter: 'all' as FilterType, addedDate: '', order: 0
            // }, ...state];
        }
        case 'UPDATE_TODOLIST_TITLE': {
            return state.map(el => el.id === action.id ? {...el, title: action.title} : el);
        }
        case 'UPDATE_TODOLIST_FILTER': {
            return state.map(el => el.id === action.id ? {...el, filter: action.filter} : el);
        }
        case 'CHANGE_TODOLIST_ENTITY_STATUS': {
            return state.map(el => el.id === action.id ? {...el, entityStatus: action.entityStatus} : el);
        }
        case 'SET_TODOLISTS': {
            return action.todolists.map(tl => ({...tl, filter: 'all', entityStatus: 'idle'}));
        }
        default:
            //throw new Error("I don't know action type!");
            return state;
    }
}

/*-----------------------------------------------------------------------------------*/

// actions
export type TodolistsActionTypes =
    CreateTodolistACType |
    DeleteTodolistACType |
    UpdateTodolistTitleACType |
    UpdateTodolistFilterACType |
    ChangeTodolistEntityStatusACType |
    SetTodolistsACType;

export type DeleteTodolistACType = ReturnType<typeof deleteTodolistAC>
export const deleteTodolistAC = (todolistId: string) => ({
    type: 'DELETE_TODOLIST',
    id: todolistId
} as const)

export type CreateTodolistACType = ReturnType<typeof createTodolistAC>
export const createTodolistAC = (todolist: TodolistAPIType /*title: string*/) => ({
    type: 'CREATE_NEW_TODOLIST', todolist
    // title,
    // todolistId: v1()
} as const)

export type UpdateTodolistTitleACType = ReturnType<typeof updateTodolistTitleAC>
export const updateTodolistTitleAC = (id: string, title: string) => ({
    type: 'UPDATE_TODOLIST_TITLE',
    id, title
} as const)

export type UpdateTodolistFilterACType = ReturnType<typeof updateTodolistFilterAC>
export const updateTodolistFilterAC = (id: string, filter: FilterType) => ({
    type: 'UPDATE_TODOLIST_FILTER',
    id, filter
} as const)

export type ChangeTodolistEntityStatusACType = ReturnType<typeof changeTodolistEntityStatusAC>
export const changeTodolistEntityStatusAC = (id: string, entityStatus: AppInitialStateStatusType) => ({
    type: 'CHANGE_TODOLIST_ENTITY_STATUS',
    id, entityStatus
} as const)

export type SetTodolistsACType = ReturnType<typeof setTodolistsAC>
export const setTodolistsAC = (todolists: Array<TodolistAPIType>) => ({
    type: 'SET_TODOLISTS',
    todolists
} as const)

/*-----------------------------------------------------------------------------------*/

// thunks

// async await version getTodolistsTC
// export const getTodolistsTC = (): AppThunkType => async (dispatch) => {
//     try {
//         const response = await todolistsAPI.getTodolists();
//         dispatch(setTodolistsAC(response.data)); // response находится в переменной
//     }
//     catch(error) {
//         console.log(error)
//     }
// }

export const getTodolistsTC = (): AppThunkType => {
    return (dispatch) => {
        dispatch(appSetStatusAC('loading'));
        todolistsAPI.getTodolists()
            .then(response => {
                dispatch(setTodolistsAC(response.data));
                dispatch(appSetStatusAC('succeeded'));
            })
            .catch(error => {
                handleServerNetworkError(error, dispatch);
            })
    }
}

export const deleteTodolistTC = (todolistId: string): AppThunkType => {
    return (dispatch) => {
        dispatch(appSetStatusAC('loading'));
        dispatch(changeTodolistEntityStatusAC(todolistId,'loading'));
        todolistsAPI.deleteTodolist(todolistId)
            .then(response => {
                dispatch(deleteTodolistAC(todolistId))
                dispatch(appSetStatusAC('succeeded'));
            })
            .catch(error => {
                handleServerNetworkError(error, dispatch);
            })
    }
}

export const createTodolistTC = (todolist: { filter: string; addedDate: string; entityStatus: string; id: string | Uint8Array; title: string; order: number }): AppThunkType => {
    return (dispatch) => {
        dispatch(appSetStatusAC('loading'));
        todolistsAPI.createTodolist(todolist.title)
            .then(response => {
                // dispatch(createTodolistAC(response.data.data.item))
                // @ts-ignore
                dispatch(createTodolistAC(response.data.data.item))
                dispatch(appSetStatusAC('succeeded'));
            })
            .catch(error => {
                handleServerNetworkError(error, dispatch);
            })
    }
}

export const updateTodolistTitleTC = (todolistId: string, title: string): AppThunkType => {
    return (dispatch) => {
        dispatch(appSetStatusAC('loading'));
        dispatch(changeTodolistEntityStatusAC(todolistId,'loading'));
        todolistsAPI.updateTodolist(todolistId, title)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(updateTodolistTitleAC(todolistId, title))
                    dispatch(appSetStatusAC('succeeded'));
                    dispatch(changeTodolistEntityStatusAC(todolistId,'succeeded'));
                } else {
                    if (response.data.messages) {
                        dispatch(appSetErrorAC(response.data.messages[0]));
                        dispatch(appSetStatusAC('failed'));
                        dispatch(changeTodolistEntityStatusAC(todolistId,'failed'));
                    } else {
                        dispatch(appSetErrorAC('Some Error'));
                    }
                }
            })
            .catch(error => {
                handleServerNetworkError(error, dispatch);
            })
    }
}