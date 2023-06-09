// import {TasksListType, tasksReducer, deleteTaskAC, createTaskAC, updateTaskAC, setTasksAC} from './tasks-reducer';
// import {createTodolistAC, deleteTodolistAC, setTodolistsAC} from './todolists-reducer';
// import {TaskPriorities, TaskStatuses} from '../api/todolistsAPI';
//
// let startState: TasksListType = {};
//
// beforeEach(() => {
//     startState = ({
//         'todolistId1': [
//             {
//                 todoListId: 'todolistId1', id: '1', title: 'HTML&CSS',
//                 status: TaskStatuses.Completed, priority: TaskPriorities.Middle,
//                 description: '', addedDate: '', startDate: '', deadline: '', order: 0
//             },
//             {
//                 todoListId: 'todolistId1', id: '2', title: 'React',
//                 status: TaskStatuses.New, priority: TaskPriorities.Hi,
//                 description: '', addedDate: '', startDate: '', deadline: '', order: 0
//             }
//         ],
//         'todolistId2': [
//             {
//                 todoListId: 'todolistId2', id: '1', title: 'Notebook',
//                 status: TaskStatuses.New, priority: TaskPriorities.Low,
//                 description: '', addedDate: '', startDate: '', deadline: '', order: 0
//             },
//             {
//                 todoListId: 'todolistId2', id: '2', title: 'New Bike',
//                 status: TaskStatuses.Completed, priority: TaskPriorities.Later,
//                 description: '', addedDate: '', startDate: '', deadline: '', order: 0
//             }
//         ]
//     })
// })
//
// test('correct task should be deleted', () => {
//
//     const action = deleteTaskAC('todolistId2', '1');
//     const endState = tasksReducer(startState, action);
//
//     expect(endState['todolistId1'].length).toBe(2);
//     expect(endState['todolistId2'].length).toBe(1);
//     expect(endState['todolistId2'][0].title).toBe('New Bike');
//     expect(endState['todolistId2'].every(task => task.id !== '1')).toBeTruthy();
// });
//
// test('correct task should be added', () => {
//
//     const action = createTaskAC(
//             {todoListId: 'todolistId1', id: '3', title: 'Angular',
//             status: TaskStatuses.Completed, priority: TaskPriorities.Middle,
//             description: '', addedDate: '', startDate: '', deadline: '', order: 0}
//     );
//     const endState = tasksReducer(startState, action);
//
//     expect(endState['todolistId1'].length).toBe(3);
//     expect(endState['todolistId2'].length).toBe(2);
//     expect(endState['todolistId1'][0].title).toBe('Angular');
//     expect(endState['todolistId1'][0].id).toBeDefined();
// });
//
// test('task status should be updated', () => {
//
//     const action = updateTaskAC('todolistId1',  '1', {status: TaskStatuses.New});
//     const endState = tasksReducer(startState, action);
//
//     expect(endState['todolistId1'].length).toBe(2);
//     expect(endState['todolistId2'].length).toBe(2);
//     expect(endState['todolistId1'][0].status).toBe(TaskStatuses.New);
//     //expect(endState['todolistId1'][0].status).toBeFalsy();
//     expect(endState['todolistId2'][0].status).toBe(TaskStatuses.New);
//     //expect(endState['todolistId2'][0].status).toBeTruthy();
// });
//
// test('task title should be updated', () => {
//
//     const title = 'New Title';
//     const action = updateTaskAC('todolistId1',  '1', {title});
//     const endState = tasksReducer(startState, action);
//
//     expect(endState['todolistId1'].length).toBe(2);
//     expect(endState['todolistId1'][0].title).toBe('New Title');
//     expect(endState['todolistId1'][1].title).toBe('React');
//
// });
//
// /*-----------------------------------------------------------------------------------*/
//
// test('correct array should be added when new todolist was added', () => {
//
//     let newTodolist = {
//         todoListId: 'todolistId1', id: '1', title: 'New Todolist',
//         status: TaskStatuses.New, priority: TaskPriorities.Middle,
//         description: '', addedDate: '', startDate: '', deadline: '', order: 0
//     };
//     const endState = tasksReducer(startState, createTodolistAC(newTodolist));
//
//     const keys = Object.keys(endState);
//     const newKey = keys.find(el => el != 'todolistId1' && el != 'todolistId2');
//     if (!newKey) {
//         throw new Error('Error!');
//     }
//
//     expect(keys.length).toBe(3);
//     expect(endState[newKey]).toEqual([]);
// });
//
// test('property with todolistId should be deleted', () => {
//
//     const endState = tasksReducer(startState, deleteTodolistAC( 'todolistId2'));
//     const keys = Object.keys(endState);
//
//     expect(keys.length).toBe(1);
//     expect(endState['todolistId2']).toBeUndefined();
// });
//
// /*-----------------------------------------------------------------------------------*/
//
// test('empty array should be added when set new todolist', () => {
//
//     const action = setTodolistsAC([
//         {id: 'todolistId1', title: 'Выучить', addedDate: '', order: 0},
//         {id: 'todolistId2', title: 'Купить', addedDate: '', order: 0}
//     ])
//
//     const endState = tasksReducer({}, action);
//     const keys = Object.keys(endState);
//
//     expect(keys.length).toBe(2);
//     expect(endState['todolistId1']).toStrictEqual([]);
//     expect(endState['todolistId2']).toStrictEqual([]);
// });
//
// test('tasks should be added to correct todolist', () => {
//
//     const action = setTasksAC(  'todolistId1', startState['todolistId1']);
//     const endState = tasksReducer({'todolistId2': [], 'todolistId1': []}, action);
//
//     expect(endState['todolistId1'].length).toBe(2);
//     expect(endState['todolistId2'].length).toBe(0);
// });

export default {}