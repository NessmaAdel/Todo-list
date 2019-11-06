// export function showAllTodo(state){
//     // state will have id,text and completed flag, this is not same as app state
//     return {
//       type: SHOW_ALL_TODO,
//       payload: state
//     }
//   };
  
//   export function showCompletedTodo(state){
//     let completedTodo = state.todo.filter( (item) => item.completed);
//     return {
//       type: SHOW_COMPLETED,
//       payload: {todo: completedTodo}
//     }
//   };
  
  
//   export function showActiveTodo(state){
//     let activeTodo =  state.todo.filter( item => !item.completed)
//     return {
//       type: SHOW_ACTIVE,
//       payload: {todo: activeTodo}
//     }
//   };
  export const setLanguage = language => ({
    type: 'SET_LANGUAGE',
    language,
  });