import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import "./styles/ModalForm.css";

const defaulValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: "",
};

const ModalForm = ({
  isShowModal,
  handleOnClickShow,
  createUsers,
  updatingUser,
  changeUser,
  setUpdatingUser,
}) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    if (updatingUser) {
      changeUser(data, updatingUser.id);
    } else {
      createUsers(data);
    }

    reset(defaulValues);
  };

  const handleCloseModal = () => {
    handleOnClickShow();
    reset(defaulValues);
    setUpdatingUser();
  };

  useEffect(() => {
    if (updatingUser) {
      reset(updatingUser);
    }
  }, [updatingUser]);

  return (
    <section className={`modalForm ${isShowModal ? "modalFormActive" : ""}`}>
      <form
        action=""
        onSubmit={handleSubmit(submit)}
        className="modalForm__form"
      >
        <i onClick={handleCloseModal} className="bx bxs-x-circle x"></i>
        <h3 className="modalForm__user">
          {updatingUser ? "Edit User" : "New User"}
        </h3>
        <div className="modalForm__div">
          <label className="modalForm__label" htmlFor="">
            First name
          </label>
          <input
            className="modalForm__input"
            type="text"
            {...register("first_name")}
          />
        </div>
        <div className="modalForm__div">
          <label className="modalForm__label" htmlFor="">
            Last name
          </label>
          <input
            className="modalForm__input"
            type="text"
            {...register("last_name")}
          />
        </div>
        <div className="modalForm__div">
          <label className="modalForm__label" htmlFor="">
            Email
          </label>
          <input
            className="modalForm__input"
            type="email"
            {...register("email")}
          />
        </div>
        <div className="modalForm__div">
          <label className="modalForm__label" htmlFor="">
            Password
          </label>
          <input
            className="modalForm__input"
            type="password"
            {...register("password")}
          />
        </div>
        <div className="modalForm__div">
          <label className="modalForm__label" htmlFor="">
            Birthday
          </label>
          <input
            className="modalForm__input"
            type="date"
            {...register("birthday")}
          />
        </div>

        <button className="modalForm__btn">
          {" "}
          {updatingUser ? "User Change" : "New User"}
        </button>
      </form>
    </section>
  );
};

export default ModalForm;
