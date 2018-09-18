export default function animalReducer(state = '', action) {
  switch (action.type) {
    case 'SET_ANIMAL':
      return action.payload;
    default:
      return state;
  }
}