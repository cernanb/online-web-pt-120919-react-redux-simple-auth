import { createStore, combineReducers } from 'redux';

// const friendsReducer = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_FRIEND':
//       return state.concat(action.payload)
//     default:
//       return state;
//   }
// };

const authReducer = (
  state = {
    currentUser: { username: 'cernanb' },
    loggedIn: false,
    friendCount: 20,
    likes: 100000,
  },
  action
) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loggedIn: true,
        currentUser: action.payload.currentUser,
        likes: action.payload.likes,
        friendCount: action.payload.friendCount,
      };
    case 'LOGOUT':
      return { ...state, loggedIn: false, currentUser: {} };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
  // friends: friendsReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
