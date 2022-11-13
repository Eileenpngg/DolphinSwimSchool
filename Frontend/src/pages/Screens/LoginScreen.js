import React, {useState} from "react";
import styles from "./login.module.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginScreen = (props) => {
  const [loginDetails, setLoginDetails]= useState()
 
  // const navigate = useNavigate();
  //react-hook-forms functionality
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    setLoginDetails(data);
  };
  const onError = (errors) => {
    console.log(errors);
  };

  // async function handleLogin(
  //   url = "http://127.0.0.1:5001/api/login",
  //   data = loginDetails
  // ) {
  //   const response = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   const jResponse = await response.json();
  //   if (jResponse.message || !jResponse) {
  //     alert(`Invalid username/password: ${jResponse.message}`);
  //   } else {
  //     userCtx.setUserDetails({ ...jResponse });
  //   }
  //   return jResponse;
  // }

  return (
    <div className={`${styles.page}`}>
      <section className="container-md " id="login">
        <form className={`${styles.form}`} onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="form-outline m-4 row justify-content-center">
            <div className="col-md-4">
              <input
                type="email"
                className="form-control mt-2"
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address"
                  },
                })}
              />
            </div>
            </div>
            <p className="mt-2 text-danger text-center">{errors.email?.message}</p>
          <div className="form-outline m-4 row justify-content-center">
            <div className="col-md-4">
              <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Please insert password"
                  },
                })}
              />
            </div>
          </div>
          <p className="mt-2 text-danger text-center">{errors.password?.message}</p>
          <div className="row dflex justify-content-center m-4">
            <button className="btn btn-secondary w-25" type='submit' >LOGIN</button>
            <p className="text-center">
            Not a user?{" "}
            <a
              className="link-primary"
              onClick={props.handleScreenChange}
              id="Register"
              href="/register"
            >
              Register
            </a>
          </p>
            <img src="/xlab_logo.png" alt=""/>
          </div>
        </form>
      </section>
    </div>
  );
};

export default LoginScreen;

// onSubmit={handleLogin}