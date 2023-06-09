import axios, {AxiosResponse} from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '74a19bbb-094d-4af5-81dc-fc82431ac8a3',
        'cookie': '_ym_uid=1665846253819884976; _ym_d=1665846253; ASP.NET_SessionId=gsrllxbybnwshgqhtgjzxpyg; .ASPXAUTH=9D60A413091D6D5CABE87E64CA8CC0D18D0FD374C94A24C3539FB2062C35DFBB750C10C4724207188BAEAA175916AF3E0AB0201D374EDDD0A389ACF3B7A6EF42924A8A5AB32E1DBFDE8FD46E73183DADEDF2A5CC'
    }
})

export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3
}

export enum TaskPriorities {
    Low = 0,
    Middle = 1,
    Hi = 2,
    Urgently = 3,
    Later = 4
}

export type TodolistAPIType = {
    id: string
    title: string
    addedDate: string
    order: number
}

export type TaskAPIType = {
    todoListId: string
    id: string
    title: string
    status: TaskStatuses
    priority: TaskPriorities
    description: string
    addedDate: string
    startDate: string
    deadline: string
    order: number
}

// более короткая запись типа через infer?
export type TodolistsResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors?: Array<FieldsErrorsType>
    data: D
}
export type FieldsErrorsType = {
    field: string
    error: string
}

// развёрнутая типизация
// type CreateTodolistResponseType = {
//     resultCode: number
//     messages: Array<string>
//     data: {item: TodolistType}
// }
//
// type DeleteUpdateTodolistResponseType = {
//     resultCode: number
//     messages: Array<string>
//     data: { }
// }

export type TasksResponseType = {
    error: string | null
    items: Array<TaskAPIType>
    totalCount: number
}

export type UpdateTaskModelType = {
    description: string
    title: string
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
}

export const todolistsAPI = {
    getTodolists(): Promise<AxiosResponse<Array<TodolistAPIType>>> {
        return (
            instance
                .get<Array<TodolistAPIType>>('todo-lists', {})
        )
    },
    createTodolist(title: string): Promise<AxiosResponse<TodolistsResponseType>> {
        return (
            instance
                .post<TodolistsResponseType<{ item: TodolistAPIType }>>
                ('todo-lists', {title: title}, {})
        )
    },
    deleteTodolist(todolistId: string): Promise<AxiosResponse<TodolistsResponseType>> {
        return (
            instance
                .delete<TodolistsResponseType>
                (`todo-lists/${todolistId}`, {})
        )
    },
    updateTodolist(todolistId: string, newTitle: string): Promise<AxiosResponse<TodolistsResponseType>> {
        return (
            instance
                .put<TodolistsResponseType>
                (`todo-lists/${todolistId}`, {title: newTitle}, {})
        )
    },


    getTasks(todolistId: string): Promise<TasksResponseType> {
        return (
            instance
                .get<TasksResponseType>
                (`todo-lists/${todolistId}/tasks`, {})
                .then(res => res.data)
        )
    },
    createTask(task: TaskAPIType /*todolistId: string, newTask: string*/): Promise<AxiosResponse<TodolistsResponseType>> {
        return (
            instance
                .post<TodolistsResponseType<{ item: TaskAPIType }>>
                (`todo-lists/${task.todoListId}/tasks/`, {title: task.title /*title: newTask*/}, {})
        )
    },
    deleteTask(todolistId: string, taskId: string): Promise<AxiosResponse<TodolistsResponseType>> {
        return (
            instance
                .delete<TodolistsResponseType>
                (`todo-lists/${todolistId}/tasks/${taskId}`, {})
        )
    },
    updateTask(todolistId: string, taskId: string, model: UpdateTaskModelType): Promise<AxiosResponse<TodolistsResponseType>> {
        return (
            instance
                .put<TodolistsResponseType<{ item: UpdateTaskModelType }>>
                (`todo-lists/${todolistId}/tasks/${taskId}`, {...model}, {})
        )
    }
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

export type AuthResponseData = {
    id: number
    email: string
    login: string
}

export type MeResponseType = TodolistsResponseType<AuthResponseData>

export const authAPI = {
    login(data: LoginParamsType): Promise<AxiosResponse<TodolistsResponseType>> {
        return (
            instance.post<TodolistsResponseType<{ userId?: number }>>('auth/login', data)
        )
    },
    logout(): Promise<AxiosResponse<TodolistsResponseType>> {
        return (
            instance.delete<TodolistsResponseType>('auth/login')
        )
    },
    authMe(): Promise<AxiosResponse<MeResponseType>> {
        return (
            instance.get<MeResponseType>('auth/me')
        )
    }
}