import global1 from "./global1";

// src/utils/auth.js
export const checkAuth = () => {
  return {
    isAuthenticated: !!global1.token,
    role: global1.user_role || 'Student'
  };
};