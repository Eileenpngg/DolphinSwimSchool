import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import UserContext from "../../context";
const BookClassForm = () => {
  // To Do: Connect to back end
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();
  const [bookingDetails, setBookingDetails] = useState();
  const [classes, setClasses] = useState();
  const [level, setLevel] = useState();
  const [date, setDate] = useState();

  //react-hook-forms functionality
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setBookingDetails(data);
    navigate("/registersuccess");
  };

  const onError = (errors) => {
    console.log(errors);
  };
  async function getClasses({
    url = "http://127.0.0.1:5001/api/classes/get",
    level,
    date,
  }) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ level, date }),
    });
    const jResponse = await response.json();
    if (response.status === 401) {
      console.log(`${jResponse.message}`);
    } else {
      setClasses({ ...jResponse });
    }
    console.log(jResponse);
    return jResponse;
  }

  useEffect(() => {
    setLevel(userCtx.userDetails.level);
    getClasses({ level, date });
  }, [date, level, userCtx.userDetails.level]);


  if (classes){
      Object.values(classes).map((aClass)=> console.log(aClass))
      console.log(classes);
  }


  return (
    <div>
      <section className="container-md" id="book_class">
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <h5 className="m-4">
            <u>Student Details</u>
          </h5>
          <div className="form-outline m-4 row justify-content-center">
            <div className="col-md-4">
              <input
                type="name"
                className="form-control mt-2"
                disabled
                value={userCtx.userDetails.name}
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter your name",
                  },
                })}
              />
              <p className="text-danger text-center mt-2">
                {errors.name?.message}
              </p>
            </div>

            <div className="col-md-4">
              <input
                type="age"
                className="form-control mt-2"
                disabled
                value={userCtx.userDetails.age}
                {...register("age", {
                  required: {
                    value: true,
                    message: "Please enter your age",
                  },
                })}
              />
              <p className="text-danger text-center mt-2">
                {errors.age?.message}
              </p>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-2 flex-column">
              <button className="btn btn-secondary w-100 mb-4" type="submit">
                Register
              </button>
              <button
                className="btn btn-secondary w-100"
                type="cancel"
                onClick={() => navigate("/student")}
              >
                Cancel
              </button>
            </div>
          </div>

          <div className="form-outline m-4 row justify-content-center">
            <div className="col-md-4">
              <input
                type="age"
                className="form-control "
                disabled
                value={userCtx.userDetails.level}
                {...register("level", {
                  required: {
                    value: true,
                    message: "Please select your level",
                  },
                })}
              />

              <p className="mt-2 text-danger text-center">
                {errors.level?.message}
              </p>
            </div>

            <div className="col-md-4">
              <input
                type="contact"
                className="form-control"
                placeholder="Contact Number"
                disabled
                value={userCtx.userDetails.contact}
                {...register("contact", {
                  required: {
                    value: true,
                    message: "Please enter your contact number",
                  },
                })}
              />
              <p className="mt-2 text-danger text-center">
                {errors.contact?.message}
              </p>
            </div>
            <div className="col-md-4"></div>
          </div>

          <h5 className="m-4">
            <u>Booking Details</u>
          </h5>
          <div className="form-outline m-4 row justify-content-center">
            <div className="col-md-4">
              <input
                type="date"
                className="form-control mt-2"
                placeholder="Preferred Date"
                onFocus={(e) => setDate(e.target.value)}
                {...register("date", {
                  required: {
                    value: true,
                    message: "Please insert your preferred date",
                  },
                })}
              />
              <p className="mt-2 text-danger text-center">
                {errors.date?.message}
              </p>
            </div>

            <div className="col-md-4">
            <select class="form-select" aria-label="Default select example" 
                    {...register("time", {
                        required: {
                          value: true,
                          message: "Please select your preferred time"
                        },
                      })}>
                        <option value=''>Preferred Session</option>
                        {classes ? Object.values(classes).map((aClass)=> (<option value={aClass.id}>{aClass.start_time} - {aClass.end_time}</option>)):"No sessions available for this date"}
              </select>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Preferred Time"
                {...register("time", {
                  required: {
                    value: true,
                    message: "Please insert your preferred time",
                  },
                })}
              />
              <p className="mt-2 text-danger text-center">
                {errors.time?.message}
              </p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3 align-self-end">
              <img src="/xlab_logo.png" alt="" width="300px" />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default BookClassForm;
