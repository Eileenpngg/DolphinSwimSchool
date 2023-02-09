import React, { useState, useContext } from "react";
import styles from "./login.module.css";
import { useForm } from "react-hook-form";
import UserContext from "../../context";

const LoginScreen = (props) => {
  const [loginDetails, setLoginDetails] = useState();
  const userCtx = useContext(UserContext);

  //react-hook-forms functionality
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleLogin({ data });

  };
  const onError = (errors) => {
    console.log(errors);
  };

  async function handleLogin({
    url = "http://127.0.0.1:5001/api/user/login",
    data = loginDetails,
  }) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jResponse = await response.json();
    console.log(jResponse);
    if (response.status === 401) {
      alert(`Invalid username/password: ${jResponse.message}`);
    } else {
      userCtx.setUserDetails({ ...jResponse });
    }
    return jResponse;
  }

  return (
  <>
    <div className={`${styles.page} `}>
      <section
        className="container-md justify-content-center "
        id="login"
      >
        <form
          className={`${styles.form}`}
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <div className="justify-content-center" style={{paddingTop: "20vh", paddingBottom: "10vh" }}>
          <div className="form-outline m-4 row justify-content-center">
            <div className="col-md-4">
              <input
                type="email"
                className="form-control mt-4"
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
              />
            </div>
          </div>
          <p className="mt-2 text-danger text-center">
            {errors.email?.message}
          </p>
          <div className="form-outline m-4 row justify-content-center">
            <div className="col-md-4" style={{zIndex:'98'}}>
              <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Please insert password",
                  },
                })}
              />
            </div>
          </div>
          <p className="mt-2 text-danger text-center">
            {errors.password?.message}
          </p>
          <div className="row dflex justify-content-center m-4">
            <button className="btn btn-secondary w-25" type="submit" style={{zIndex:'99'}}>
              LOGIN
            </button>
            <p className="text-center" style={{zIndex:'99'}}>
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
          </div>
          <div className="row dflex justify-content-center m-4">
            <img src='/swimschoollogo.png' alt="" style={{transform: 'translateY(-38%)', width: "30vw" }} />
          </div>
          </div>
    
        </form>
      </section>
    </div>
    </>
  );
};

export default LoginScreen;


{/* <section class="vh-100" style="background-color: #9A616D;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style="border-radius: 1rem;">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form>

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                    <span class="h1 fw-bold mb-0">Logo</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account</h5>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example17" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example27" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example27">Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" type="button">Login</button>
                  </div>

                  <a class="small text-muted" href="#!">Forgot password?</a>
                  <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <a href="#!"
                      style="color: #393f81;">Register here</a></p>
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}