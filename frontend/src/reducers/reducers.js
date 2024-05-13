// reducers/reducers.js

const initialState = {
  messages: []
};

const rootReducers = (state = initialState, action) => {
  switch(action.type) {
    case 'SEND_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    default:
      return state;
  }
};

export default rootReducers;
