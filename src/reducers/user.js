
const userReducer = (
  state = []
  , action) => {
  switch (action.type) {

  case "ADD_TODO":
  var newState = [...state,{text:action.payload,id: action.id, completed: action.completed}]
// var newState = Object.assign({}, state);
// newState.text.push(action.payload);
    return newState;
    break;
    default:
      return state
  }
}

export default userReducer