import React from "react";
import styles from "./login.module.css";
const login = () => {
  return (
    <div className={`${styles.page}`}>
      <section className="container-md " id="login">
        <form className={`${styles.form}`}>
          <div className="form-outline m-4 row justify-content-center">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control m-2"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="form-outline m-4 row justify-content-center">
            <div className="col-md-4">
              <input
                type="password"
                className="form-control m-2"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="row dflex justify-content-center m-4">
            <button className="btn btn-secondary w-25">LOGIN</button>
            <img src="/xlab_logo.png" alt=""/>
          </div>
        </form>
      </section>
    </div>
  );
};

export default login;
