import { useNavigate } from "react-router";
import {emailSchema} from "../validation/Validation"
import { useFormik } from "formik";
import { loginUser } from "../services/authService"
import { useState } from "react";

function Login() {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState("");

    const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: emailSchema,
    onSubmit: async (values) => {      
      const user = await loginUser(values.email, values.password )
      if(user) {
        localStorage.setItem('user', JSON.stringify(user));
        navigate("/")
      } else {
        setErrorMessage("Login failed. Please check your credentials.");
      }      
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Login Form
        </h2>
        <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
          {errorMessage && (
            <p className="text-red-500 text-center mb-4">{errorMessage}</p>
          )}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"          
          >
            Submit
          </button>
        </form>
      </div>
    </div>    
  );
}

export default Login;
