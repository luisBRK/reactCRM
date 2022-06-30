import NewUserForm from "../components/NewUserForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageError from "../components/PageError";
import Spinner from "../components/Spinner";

const EditUser = () => {
  const [user, setUser] = useState({});
  const [charge, setCharge] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const getUserAPI = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`;

        const answer = await fetch(url);

        const result = await answer.json();

        setUser(result);
      } catch (error) {
        console.log(error);
      }

      setTimeout(() => {
        setCharge(!charge);
      }, 500);
    };
    getUserAPI();
  }, []);

  return (
    <>
      <h2 className="dashboard__title">Edit user</h2>
      <p className="dashboard__text">
        Change the following fields to update information.
      </p>

      {Object.keys(user).length !== 0 ? (
        <NewUserForm user={user} charge={charge} />
      ) : charge ? (
        <Spinner />
      ) : (
        <PageError />
      )}
    </>
  );
};

export default EditUser;
