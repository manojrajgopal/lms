import global1 from "../global1";

export const checkAuth = () => {
  return {
    isAuthenticated: !!global1.token,
    role: global1.role || 'Student'
  };
};

export const login = (token, role) => {
  global1.token = token;
  global1.role = role;
  global1.user_id = token.split('.')[0]; // Simple user ID extraction
};

export const logout = () => {
  // Clear all global1 properties
  Object.keys(global1).forEach(key => {
    delete global1[key];
  });
};