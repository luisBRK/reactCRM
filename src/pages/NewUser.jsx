import NewUserForm from "../components/NewUserForm";
const NewUser = () => {
  return (
    <>
      <h2 className="dashboard__title">Create a new user</h2>
      <p className="dashboard__text">
        Complete the following fields to add a new user
      </p>

      <NewUserForm />
    </>
  );
};

export default NewUser;
