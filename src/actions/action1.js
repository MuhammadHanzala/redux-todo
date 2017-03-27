// export const setName = (name) => {
//     return {
//         type: "SETNAME",
//         payload: name
//     }
// }

// export const setAge = () => {
//     return {
//         type: 'SETAGE',
//         payload: name
//     }
// }
let nextId = 0;
export const addTodo = (todo) => {
    // console.log(todo);
    return {
        type: 'ADD_TODO',
        payload: todo,
        id: nextId++,
        completed: false

    }
}
