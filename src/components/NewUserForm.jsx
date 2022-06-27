import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import AlertError from "./AlertError";

const NewUserForm = () => {
  // schema
  const newUserSchema = Yup.object().shape({
    userName: Yup.string()
      .min(3, "User name is so short")
      .max(45,"User name is so long")
      .required("The user name is required"),
    userCompany: Yup.string().required("The company name is required"),
    userEmail: Yup.string()
      .email("Set a valid email")
      .required("You need to set an user email"),
    userPhone: Yup.number("You need to set a valid number")
      .max(1000000000)
      .positive("You need to set a valid number")
      .integer("You need to set a valid number")
      .required("The user phone number is required"),
    userNotes: Yup.string().required("The user notes are required"),
  });

  // functions
  const handleSubmit = (values) => {
    console.log(values);
  };

  const pressedButton = (event) => {
    const submitButton = event.target;
    submitButton.classList.add("pressed-button");
    setTimeout(() => {
      submitButton.classList.remove("pressed-button");
    }, 100);
  };

  return (
    <div className="user-form container-m">
      <h3 className="user-form__title">Add new User</h3>

      <Formik
        initialValues={{
          userName: "",
          userCompany: "",
          userEmail: "",
          userPhone: "",
          userNotes: "",
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={newUserSchema}
      >
        {({ errors, touched }) => {
          console.log(errors);
          return (
            <Form>
              <div className="section">
                <div className="section-input">
                  <label className="label" htmlFor="userName">
                    Name:
                  </label>

                  <Field
                    className="field"
                    id="userName"
                    type="text"
                    placeholder="Input user complete name"
                    name="userName"
                  />
                </div>

                {errors.userName && touched.userName ? (
                  <AlertError>{errors.userName}</AlertError>
                ) : null}
              </div>

              <div className="section">
                <div className="section-input">
                  <label className="label" htmlFor="userCompany">
                    Company:
                  </label>

                  <Field
                    className="field"
                    id="userCompany"
                    type="text"
                    placeholder="Input user company"
                    name="userCompany"
                  />
                </div>

                {errors.userCompany && touched.userCompany ? (
                  <AlertError>{errors.userCompany}</AlertError>
                ) : null}
              </div>

              <div className="section">
                <div className="section-input">
                  <label className="label" htmlFor="userEmail">
                    Email:
                  </label>

                  <Field
                    className="field"
                    id="userEmail"
                    type="email"
                    placeholder="Input user email"
                    name="userEmail"
                  />
                </div>

                {errors.userEmail && touched.userEmail ? (
                  <AlertError>{errors.userEmail}</AlertError>
                ) : null}
              </div>

              <div className="section">
                <div className="section-input">
                  <label className="label" htmlFor="userPhone">
                    Phone numer:
                  </label>

                  <Field
                    className="field"
                    id="userPhone"
                    type="tel"
                    placeholder="Input user phone number"
                    name="userPhone"
                  />
                </div>

                {errors.userPhone && touched.userPhone ? (
                  <AlertError>{errors.userPhone}</AlertError>
                ) : null}
              </div>

              <div className="section">
                <div className="section-input">
                  <label className="label" htmlFor="userNotes">
                    Notes
                  </label>

                  <Field
                    as="textarea"
                    className="field"
                    id="userNotes"
                    type="tel"
                    placeholder="Input user notes"
                    name="userNotes"
                  />
                </div>
                {errors.userNotes && touched.userNotes ? (
                  <AlertError>{errors.userNotes}</AlertError>
                ) : null}
              </div>

              <div className="section-button">
                <input
                  className="form-button"
                  type="submit"
                  value="Save user"
                  onClick={pressedButton}
                  s
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default NewUserForm;
