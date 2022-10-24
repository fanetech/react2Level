import React, { useEffect, useRef, useState } from "react";
import { userService } from "../../../services/user.services";

const User = () => {
  const [users, setUsers] = useState([]);
  const flag = useRef(false);
  useEffect(() => {
    if (flag.current === false) {
      const data = userService.getAllUser();
      console.log(data);
      setUsers(data);
    }

    return () => flag.current = true
  }, []);
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
          {users.map((user) => (
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
