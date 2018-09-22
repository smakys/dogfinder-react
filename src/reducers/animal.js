import { CHANGE_ANIMAL } from '../actions';

export default function animalReducer(state = '', action) {
  switch (action.type) {
    case CHANGE_ANIMAL:
      return action.payload;
    default:
      return state;
  }


  return { blah: "blah", foo: 'hello', };

}