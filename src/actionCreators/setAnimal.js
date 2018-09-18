import { CHANGE_ANIMAL } from '../actions';

export default function setAnimal(animal) {
  return {
    type: CHANGE_ANIMAL,
    payload: animal
  }
}