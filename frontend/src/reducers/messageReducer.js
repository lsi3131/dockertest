// src/reducers/messageReducer.js
import { SET_MESSAGE } from '../actions/types';

const initialState = {
  message: ''
};

const messageReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_MESSAGE:
      console.log('set message')
      return {
        ...state,
        message: action.payload
      };
    default:
      console.log('default')
      return state;
  }
};

export default messageReducer;
