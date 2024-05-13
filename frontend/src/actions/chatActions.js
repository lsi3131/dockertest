// actions/chatActions.js
import { SEND_MESSAGE } from './types';

export const sendMessage = (message) => {
  return {
    type: SEND_MESSAGE,
    payload: message
  };
};
