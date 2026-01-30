import * as z from "zod";

interface Todo {
    id: number
    text: string
    completed: boolean
}

interface TaskState {
    todos: Todo[];
    length: number;
    pending: number;
    completed: number;
}

export type TaskAction = 
| {type: 'ADD_TODO', payload: string}
| {type: 'TOGGLE_TODO', payload: number}
| {type: 'DELETE_TODO', payload: number}

const TodoSchema = z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean(),
})

const TaskStateSchema = z.object({
    todos: z.array(TodoSchema),
    length: z.number(),
    pending: z.number(),
    completed: z.number(),
})

export const getTasksInitialState = (): TaskState => {
    const tasksState = localStorage.getItem('tasks')
    if(!tasksState) {
            return {
            todos: [],
            length: 0,
            pending: 0,
            completed: 0,
        }
    }

    //validar mediante zod
    const result = TaskStateSchema.safeParse(JSON.parse(tasksState))
    if(result.error) {
        console.log(result.error)
        return {
            todos: [],
            length: 0,
            pending: 0,
            completed: 0,
        }
    }
    return result.data
    // return JSON.parse(tasksState)
}

export const tasksReducer = (state: TaskState, action: TaskAction):TaskState => {

    switch(action.type) {
        case 'ADD_TODO':{
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            }

            return {
                ...state,
                todos: [
                    ...state.todos,
                    newTodo
                ],
                length: state.todos.length + 1,
                pending:state.pending + 1,
            }
        } 
        case 'DELETE_TODO':
            {
                const currentTodos = state.todos.filter(todo => todo.id !== action.payload)
                return {
                    ...state,
                    todos: currentTodos,
                    length: currentTodos.length,
                    pending: currentTodos.filter(todo => !todo.completed).length,
                    completed: currentTodos.filter(todo => todo.completed).length,
                }
            }
        case 'TOGGLE_TODO':{
            const updateTodo = state.todos.map( todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                ...state,
                todos: updateTodo,
                length: state.todos.length,
                pending: updateTodo.filter(todo => !todo.completed).length,
                completed: updateTodo.filter(todo => todo.completed).length,
            }
        }
        default:
            return state

    }
}