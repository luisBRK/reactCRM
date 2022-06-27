import erroIcon from "../icons/errorIcon.svg";

const AlertError = ({ children }) => {
  return (
    <div className="error-message">
      <div className="error-message__img">
        <img src={erroIcon} alt="error icon" />
      </div>
      <p className="error-message__text">{children}</p>
    </div>
  );
};

export default AlertError;
