import { useNavigate } from "react-router-dom";
import seeIcon from "../icons/seeIcon.svg";
import editIcon from "../icons/editIcon.svg";
import deleteIcon from "../icons/deleteIcon.svg";

const User = ({ user }) => {
  const { userName, userCompany, userEmail, userPhone, userNotes, id } = user;
  const navigate = useNavigate();

  return (
    <div className="card-user">
      <p className="card-user__data">{userName}</p>

      <div className="card-user__data contact">
        <p>
          <span>Email: </span>
          {userEmail}
        </p>
        <p>
          <span>Phone: </span>
          {userPhone}
        </p>
      </div>

      <p className="card-user__data">{userCompany}</p>

      <div className="card-user__data buttons">
        <button
          type="button"
          className="card-user-button"
          onClick={() => navigate(`/users/${id}`)}
        >
          <img src={seeIcon} alt="icon" />
        </button>
        <button type="button" className="card-user-button">
          <img src={editIcon} alt="icon" />
        </button>
        <button type="button" className="card-user-button">
          <img src={deleteIcon} alt="icon" />
        </button>
      </div>
    </div>
  );
};
export default User;
