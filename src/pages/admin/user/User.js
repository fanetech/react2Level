import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { userService } from "../../../services/user.services";

const User = () => {
    // const [users, setUsers] = useState([])
  const {isLoading, error, data } = useQuery("users", ()=> userService.getAllUser());
  const users = data || { 'data': [] }
  if(isLoading){
    console.log("loading")
    return <div>Loading...</div>
  }
  // setUsers(data || { 'data': [] })
  // setUsers(data || { 'data': [] });
  // const flag = useRef(false);
  // useEffect(() => {
  //   if (flag.current === false) {
  //     userService
  //       .getAllUser()
  //       .then((res) => setUsers(res.data.data))
  //       .catch((err) => console.log(err));
  //   }

  //   return () => (flag.current = true);
  // }, []);
  return (
    <div className="user">
      User
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.data.map((user) => (
            <tr key={user.id}>
              <td> {user.id} </td>
              <td> {user.email} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
