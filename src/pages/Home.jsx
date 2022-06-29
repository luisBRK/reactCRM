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
            <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
