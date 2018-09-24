import { CHANGE_ANIMAL } from '../actions';

export default function animalReducer(state = '', action) {
  switch (action.type) {
    case CHANGE_ANIMAL:
      return action.payload;
    default:
      return state;
  }

  const blah="dkljfslk";
  const yay="jdlkfjsdk",bleh='ldjflks';

  return { blah: 'blah', foo: 'hello' };

  let hahah;




}