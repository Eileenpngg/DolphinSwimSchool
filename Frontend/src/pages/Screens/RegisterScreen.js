import React, {useState} from "react";
import styles from "./login.module.css";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegisterScreen = (props) => {
  const [userDetails, setUserDetails] = useState({});
  
 //react-hook-forms functionality
 const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    name: String,
    age: Number,
    level: String,
    contact: Number,
    is_admin: Boolean,
    email: String,
    password: String
  })>
  ({
    defaultValues: {
        name: "John",
        age: 12,
        level: "L2",
        contact: 12345667,
        is_admin: false,
        email: "jonathan",
        password: 123445677
    }
  });
  const onSubmit = (data) => {
    setUserDetails(data);
    console.log(userDetails)
  };
  
  const onError = (errors) => {
    console.log(errors);
  };
//   const handleRegister = (e) => {
//     if (registerUser.username && registerUser.password && registerUser.type) {
//       return putAccount();
//     } else {
//       alert("Missing username / password / user type input");
//     }
//   };
return(
<div>
      <section className="container-md " id="login">
        <form className={`${styles.form}`} onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="form-outline m-4 row justify-content-center">
            <div className="col-md-4">
              <input
                type="name"
                className="form-control mt-2"
                placeholder="Name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter your name"
                  },
                })}
              />
            </div>
            </div>
            <p className="mt-2 text-danger text-center">{errors.name?.message}</p>

            <div className="form-outline m-4 row justify-content-center">
            <div className="col-md-4">
              <input
                type="age"
                className="form-control mt-2"
                placeholder="Age"
                {...register("age", {
                  required: {
                    value: true,
                    message: "Please enter your age"
                  },
                })}
              />
            </div>
            </div>
            <p className="mt-2 text-danger text-center">{errors.age?.message}</p>

            <div className="form-outline m-4 row justify-content-center">
            <div className="col-md-4">
            <select class="form-select" aria-label="Default select example" 
            {...register("level", {
                required: {
                  value: true,
                  message: "Please select your level"
                },
              })}>
                <option value=''>Level</option>
                <option value='T1'>T1</option>
                <option value ='T2'>T2</option>
                <option value ='T3'>T3</option>
                <option value ='T4'>T4</option>
                <option value ='L1'>L1</option>
                <option value ='L2'>L2</option>
                <option value ='L3'>L3</option>
                <option value ='L4'>L4</option>
                <option value ='L5'>L5</option>
                <option value ='L6'>L6</option>
                <option value ='L7'>L7</option>
                <option value ='L8'>L8</option>
                <option value ='I1'>I1</option>
                <option value ='I2'>I2</option>
                <option value ='I3'>I3</option>
                <option value ='I4'>I4</option>
                <option value ='I5'>I5</option>
                <option value ='I6'>I6</option>
                <option value ='I7'>I7</option>
                <option value ='I8'>I8</option>
            </select>
            </div>
            </div>
            <p className="mt-2 text-danger text-center">{errors.level?.message}</p>

            <div className="form-outline m-4 row justify-content-center">
            <div className="col-md-4">
              <input
                type="contact"
                className="form-control mt-2"
                placeholder="Contact Number"
                {...register("contact", {
                  required: {
                    value: true,
                    message: "Please enter your contact number"
                  },
                })}
              />
            </div>
            </div>
            <p className="mt-2 text-danger text-center">{errors.contact?.message}</p>

            <div className="form-outline m-4 row justify-content-center">
            <div className="col-md-4">
            <select class="form-select" aria-label="Default select example" 
            {...register("is_admin", {
                  required: {
                    value: true,
                    message: "Please select if you are a Student or Instructor"
                  },
                })}>
                <option value=''>Student/Instructor</option>
                <option value= {false}>Student</option>
                <option value = {true}>Instructor</option>
            </select>

            </div>
            </div>
            <p className="mt-2 text-danger text-center">{errors.is_admin?.message}</p>

          <div className="form-outline m-4 row justify-content-center">
            <div className="col-md-4">
              <input
                type="email"
                className="form-control mt-2"
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
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
            <button className="btn btn-secondary w-25" type='submit' >Register</button>
          <p className="text-center">
            Existing user?{" "}
            <a
              className="link-primary"
              id="Login"
              href="/"
            >
              Login
            </a>
          </p>
            <img src="/xlab_logo.png" alt=""/>
          </div>
        </form>
      </section>
    </div>
)
};

export default RegisterScreen;

// onSubmit={handleLogin}