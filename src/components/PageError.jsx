import notFound from "../icons/notFound.svg";

const PageError = () => {
  return (
    <div className="error-page container-m">
      <h1 className="error-page__title">We don't found any result</h1>
      <img
        className="error-page__img"
        src={notFound}
        alt="page not found icon"
      />
    </div>
  );
};

export default PageError;
