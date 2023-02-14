import React from "react";

import "./styles/UserCard.css";

const UsersCard = ({
  user,
  deleteUser,
  setUpdatingUser,
  handleOnClickShow,
}) => {
  const handleOnClickEdit = () => {
    setUpdatingUser(user);
    handleOnClickShow();
  };

  return (
    <article className="userCard" id="userBackgrund">
      <h3 className="userCard__name">
        {user.first_name} {user.last_name}
      </h3>

      <div className="userCard__Line">
          <hr /> 
      </div>

     

      <ul className="userCard__list">
        <li className="userCard__item">
          <span className="userCard__email">EMAIL</span>
          <div> {user.email}</div>
        </li>
        <li className="userCard__item">
          <span className="userCard__freeDay">BIRTHDAY</span>

          <div>
            <i className="bx bx-gift"></i> {user.birthday}
          </div>
        </li>
      </ul>

      <div className="userCard__Line" >
      <hr />
      </div>

      

      <footer className=" userCard__btn ">
        <button href="userBackgrund" className="btn" onClick={() => deleteUser(user.id)}>
          <i className="bx bx-trash bx-tada UserCard__trash"></i>
        </button>
        <button className="btn" onClick={handleOnClickEdit}>
          <i className="bx bx-pencil bx-spin UserCard__edit"></i>
        </button>
      </footer>
    </article>
  );
};

export default UsersCard;
