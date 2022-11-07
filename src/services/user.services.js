import Axios from "./caller.services";
const getAllUser = () => {
  return Axios.get("/users");
};
const getUser = (uid) => {
  return Axios.get("/users/" + uid);
};

export const userService = {
  getAllUser,
  getUser,
};
