import { useState, useEffect } from "react";
import User from "../components/User";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsersAPI = async () => {
      try {
        const url = "http://localhost:4000/users";
        const answer = await fetch(url);
        const result = await answer.json();

        setUsers(result);
      } catch (error) {
        console.log(error);
      }
    };

    getUsersAPI();
  }, []);

  const confirmDelete = async (userId) => {
    try {
      const url = `http://localhost:4000/users/${userId}`;

      const answer = await fetch(url, {
        method: "DELETE",
      });

      const result = await answer.json();

      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (userId) => {
    // const custom swal
    const swalWithcustomButtons = Swal.mixin({
      customClass: {
        confirmButton: "sweetalert btn-success",
        cancelButton: "sweetalert btn-danger",
        title: "sweetalert text",
        actions: "sweetalert actions",
      },
      buttonsStyling: false,
    });

    // ALERT
    swalWithcustomButtons
      .fire({
        title: "Are you sure you want to delete this User?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
        width: 600,
      })
      .then((result) => {
        if (result.isConfirmed) {
          confirmDelete(userId);
        }
      });
  };

  return (
    <>
      <div className="table">
        <div className="table__header">
          <p>Name</p>
          <p>Contact</p>
          <p>Company</p>
          <p>Actions</p>
        </div>
        <div className="table__body">
          {users.map((user) => (
            <User key={user.id} user={user} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
