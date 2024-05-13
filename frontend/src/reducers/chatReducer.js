// reducers/chatReducer.js
import { SEND_MESSAGE } from '../actions/types';

const initialState = {
  messages: []
};

const chatReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    default:
      return state;
  }
};

export default chatReducer;
