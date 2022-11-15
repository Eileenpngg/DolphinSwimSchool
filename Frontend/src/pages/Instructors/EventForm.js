import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
const EventForm=()=>{
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
              <h1>EVENT</h1>
                  <section className="container-md" id="book_class">
                    <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <h5 className="m-4"><u>Picture</u></h5>
                    <div className="form-outline m-4 row justify-content-start">
                        <div className="col-md-4">
                          <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Please insert image url"
                            {...register("image", {
                              required: {
                                value: true,
                                message: "Please insert image url"
                              },
                            })}
                          />
                          <p className="text-danger text-center mt-2">{errors.image?.message}</p>
                        </div>
                        <div className='col-md-4'></div>
                        <div className="col-md-2"></div>
                        <div className="col-md-2 flex-column">
                            <button className="btn btn-secondary w-100 mb-4" type='submit'>Add Event</button>
                            <button className="btn btn-secondary w-100" type='cancel' onClick={()=>navigate('/instructor')}>Cancel</button>
                        </div>             
                      </div> 
                      <h5 className="m-4"><u>Booking Details</u></h5>
                        <div className="form-outline m-4 row justify-content-start">
                        <div className="col-md-4">
                          <textarea
                            type="description"
                            className="form-control"
                            placeholder="description"
                            {...register("contact", {
                              required: {
                                value: true,
                                message: "Please enter description"
                              },
                            })}
                          />
                          <p className="mt-2 text-danger text-center">{errors.contact?.description}</p>
                        </div>
                        <div className="col-md-4"></div>
                        </div>

                      <div className="form-outline m-4 row justify-content-center">
                        <div className="col-md-4">
                          <input
                            type="date"
                            className="form-control mt-2"
                            placeholder="Preferred Date"
                            {...register("date", {
                              required: {
                                value: true,
                                message: "Please insert your date"
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
export default EventForm