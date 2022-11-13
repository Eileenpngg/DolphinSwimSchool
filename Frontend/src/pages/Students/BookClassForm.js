import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
const BookClassForm=()=>{
    // To Do: Connect to back end 
    // Convert time to unix before sending to backend
    //Autopoulate name, level, contact and age

    const navigate= useNavigate();
    const [bookingDetails, setBookingDetails]= useState()

 //react-hook-forms functionality
 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const allData= await data
    setBookingDetails(allData);
    navigate('/registersuccess')
  };
  
  const onError = (errors) => {
    console.log(errors);
  };
    return(
        <div>
              <section className="container-md" id="book_class">
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                <h5 className="m-4"><u>Student Details</u></h5>
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
                      <p className="text-danger text-center mt-2">{errors.name?.message}</p>
                    </div>

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
                          <p className="text-danger text-center mt-2">{errors.age?.message}</p>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2 flex-column">
                        <button className="btn btn-secondary w-100 mb-4" type='submit'>Register</button>
                        <button className="btn btn-secondary w-100" type='cancel'>Cancel</button>
                    </div>             
                  </div> 


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
                    <p className="mt-2 text-danger text-center">{errors.level?.message}</p>
                    </div>

                    <div className="col-md-4">
                      <input
                        type="contact"
                        className="form-control"
                        placeholder="Contact Number"
                        {...register("contact", {
                          required: {
                            value: true,
                            message: "Please enter your contact number"
                          },
                        })}
                      />
                      <p className="mt-2 text-danger text-center">{errors.contact?.message}</p>
                    </div>
                    <div className="col-md-4"></div>
                    </div>

                <h5 className="m-4"><u>Booking Details</u></h5>
                  <div className="form-outline m-4 row justify-content-center">
                    <div className="col-md-4">
                      <input
                        type="date"
                        className="form-control mt-2"
                        placeholder="Preferred Date"
                        {...register("date", {
                          required: {
                            value: true,
                            message: "Please insert your preferred date"
                          },
                        })}
                      />
                    <p className="mt-2 text-danger text-center">{errors.date?.message}</p>
                    </div>
                    {/* changes to sessions timing */}
                    <div className="col-md-4">
                      <input
                        type="time"
                        className="form-control mt-2"
                        placeholder="Preferred Time"
                        {...register("time", {
                          required: {
                            value: true,
                            message: "Please insert your preferred time"
                          },
                        })}
                      />
                    <p className="mt-2 text-danger text-center">{errors.time?.message}</p>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 align-self-end">
                    <img src="/xlab_logo.png" alt="" width="300px"/>
                    </div>
                    </div>

                </form>
              </section>
            </div>
        )
}

export default BookClassForm