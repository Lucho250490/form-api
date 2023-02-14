import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import ModalForm from "./components/ModalForm";
import Navbar from "./components/Navbar";
import UsersList from "./components/UsersList";

const base__url = "https://users-crud.academlo.tech/";

function App() {
  const [users, setUsers] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);

  const [updatingUser, setUpdatingUser] = useState();

  const handleOnClickShow = () => {
    setIsShowModal((isShowModal) => !isShowModal);
  };

  const createUsers = (data) => {
    axios
      .post(`${base__url}users/`, data)
      .then((rel) => {
        createAllUsers(rel.data);
        handleOnClickShow();
      })
      .catch((err) => console.log(err));
  };

  const createAllUsers = () => {
    axios
      .get(`${base__url}users/`)
      .then((rel) => setUsers(rel.data))
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    axios
      .delete(`${base__url}users/${id}/`)
      .then(() => createAllUsers())
      .catch((err) => console.log(err));
  };

  const changeUser = (data, id) => {
    axios
      .patch(`${base__url}users/${id}/`, data)
      .then(() => {
        createAllUsers();
        handleOnClickShow();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    createAllUsers();
  }, []);

  return (
    <div className="App">
      <Navbar handleOnClickShow={handleOnClickShow} />
      <ModalForm
        isShowModal={isShowModal}
        createUsers={createUsers}
        handleOnClickShow={handleOnClickShow}
        updatingUser={updatingUser}
        changeUser = {changeUser}
        setUpdatingUser = {setUpdatingUser}
      />

      <UsersList
        users={users}
        deleteUser={deleteUser}
        setUpdatingUser={setUpdatingUser}
        handleOnClickShow={handleOnClickShow}
      />
    </div>
  );
}

export default App;
