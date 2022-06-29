import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageError from "../components/PageError";
import Spinner from "../components/Spinner";

const ViewUser = () => {
  const [user, setUser] = useState({});
  const [charge, setCharge] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const getUserAPI = async () => {
      try {
        const url = `http://localhost:4000/users/${id}`;

        const answer = await fetch(url);

        const result = await answer.json();

        setUser(result);
      } catch (error) {
        console.log(error);
      }

      setTimeout(() => {
        setCharge(!charge);
      }, 1000);
    };
    getUserAPI();
  }, []);

  console.log(charge);

  const { userName, userCompany, userEmail, userPhone, userNotes } = user;

  return charge ? (
    <Spinner />
  ) : Object.keys(user).length !== 0 ? (
    <div className="user container-m">
      <h1 className="user__title">{userName}</h1>

      <div className="user-info">
        <p className="user-info__data">
          <span>User name: </span>
          {userName}
        </p>

        <p className="user-info__data">
          <span>Company: </span>
          {userCompany}
        </p>

        <p className="user-info__data">
          <span>Email: </span>
          {userEmail}
        </p>

        <p className="user-info__data">
          <span>Phone number: </span>
          {userPhone}
        </p>

        <p className="user-info__data">
          <span>Notes: </span>
          {userNotes ? userNotes : "This user don't have set notes"}
        </p>
      </div>
    </div>
  ) : (
    <PageError />
  );
};

export default ViewUser;
