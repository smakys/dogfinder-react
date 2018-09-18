import { CHANGE_LOCATION } from '../actions';

export default function setLocation(payload) {
  return {
    type: CHANGE_LOCATION,
    payload
  }
}