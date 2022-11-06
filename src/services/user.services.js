import Axios from "./caller.services";
const getAllUser = async () => {
//   const {data} = await Axios.get("/users");
//   console.log(data)
  return Axios.get("/users");
};
const getUser = (uid) => {
  return Axios.get("/users/" + uid);
};

export const userService = {
  getAllUser,
  getUser,
};
