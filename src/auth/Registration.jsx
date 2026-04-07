import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registration } from "../redux/RegistrationSlice";
import { useNavigate } from "react-router";

const Registration = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    gender: "",
    age: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Введите логин"),
    email: Yup.string().email("Некорректный email").required("Введите email"),
    password: Yup.string()
      .min(8, "Минимальная длина - 8 символов")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=$$$${};':"\\|,.<>\/?])/,
        "Пароль должен содержать минимум 1 заглавную букву, 1 прописную, 1 число и 1 символ",
      )
      .required("Введите пароль"),
    gender: Yup.string().required("Выберите пол"),
    age: Yup.number()
      .min(10, "Минимальное значение - 10")
      .max(100, "Максимальное значение - 100")
      .required("Введите ваш возраст"),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (data) => {
    await dispatch(registration(data)).unwrap();
    navigate("/login");
  };

  const handleClickLog = () => {
    navigate("/login");
  };

  return (
    <>
      <h1>Регистрация</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Логин: </label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="div" />
          </div>
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
          <div>
            <label>Пол: </label>
            <label>
              <Field type="radio" name="gender" value="male" />
              Мужской
            </label>
            <label>
              <Field type="radio" name="gender" value="female" />
              Женский
            </label>
            <ErrorMessage name="gender" component="div" />
          </div>
          <div>
            <label>Возраст: </label>
            <Field type="number" id="age" name="age" />
            <ErrorMessage name="age" component="div" />
          </div>
          <br></br>
          <button type="submit">Зарегистрироваться</button>
          <br></br>
          <br></br>
          <button
            type="button"
            style={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
            }}
            onClick={handleClickLog}
          >
            Вход
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default Registration;
