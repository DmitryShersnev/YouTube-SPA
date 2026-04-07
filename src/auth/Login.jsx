import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../redux/LoginSlice";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Некорректный email").required("Введите email"),
    password: Yup.string()
      .min(8, "Минимальная длина - 8 символов")
      .matches(
        /^(?=.*[a-z])(?=.*\d)/,
        "Пароль должен содержать минимум 1 цифру",
      )
      .required("Введите пароль"),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (data) => {
    await dispatch(login(data)).unwrap();
    navigate("/");
  };

  const handleClickReg = () => {
    navigate("/registration");
  };

  return (
    <>
      <h1>Вход</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>E-mail: </label>

            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label>Пароль: </label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <br></br>
          <button type="submit">Войти</button>
          <br></br>
          <br></br>
          <button
            type="button"
            style={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
            }}
            onClick={handleClickReg}
          >
            Регистрация
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
