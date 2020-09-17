export const login = (username) => {
  return {
    type: 'LOGIN',
    payload: {
      currentUser: {
        username: username,
        password: 'password',
      },
      likes: 10000000,
      friendCount: 1000000,
    },
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};
