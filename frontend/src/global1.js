export default {
  authenticated: localStorage.getItem("authenticated") === "true",
  user_role: localStorage.getItem("user_role") || "",
  token: localStorage.getItem("token") || "",
  user_id: localStorage.getItem("user_id") || "",
  user_name: localStorage.getItem("user_name") || "",
  colid: localStorage.getItem("colid") || ""
};
