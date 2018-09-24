export default function breedsReducer(state = [], action) {
  if (action.type === 'SET_BREEDS') {
    return action.payload;
  }

  return { ldkjflks: 'lsdjfkljds', hello: 'world' };

  return state;
}