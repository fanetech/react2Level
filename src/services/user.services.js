import Axios from "./caller.services";
const getAllUser = async () => {
  const {data} = await Axios.get("/users");
  return data;
};
const getUser = (uid) => {
  return Axios.get("/users/" + uid);
};

export const userService = {
  getAllUser,
  getUser,
};
