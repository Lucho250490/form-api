import React from "react";
import UsersCard from "./UsersCard";

import "./styles/UsersList.css"

const UsersList = ({
  users,
  deleteUser,
  setUpdatingUser,
  handleOnClickShow,
}) => {
  return (
    <section className="UsersList">
      {users.map((user) => (
        <UsersCard
          user={user}
          key={user.id}
          deleteUser={deleteUser}
          setUpdatingUser={setUpdatingUser}
          handleOnClickShow={handleOnClickShow}
        />
      ))}
    </section>
  );
};

export default UsersList;
