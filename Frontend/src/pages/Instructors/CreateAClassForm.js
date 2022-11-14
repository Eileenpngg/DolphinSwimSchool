import React,{useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
import UserContext from "../../context";

const CreateAClassForm=()=>{

// To Do: Connect to back end 
// Convert time to unix before sending to backend
//Autopoulate name, level, contact and age

const userCtx= useContext(UserContext)

const navigate= useNavigate();
const [classDetails, setClassDetails]= useState()
const [sessions, setSessions]=useState()
 //react-hook-forms functionality
 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const allData= await data
    setClassDetails(allData);
    navigate('/instructor')
  };
  
  const onError = (errors) => {
    console.log(errors);
  };

  //To populate sessions drop down
  async function getSessions(
    url = "http://127.0.0.1:5001/api/sessions/get"
  ) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    });
    const jResponse = await response.json();
    console.log(jResponse);
    if (response.status === 401) {
      console.log(`${jResponse.message}`);
    } else {
      setSessions({ ...jResponse });
      
    }
    return jResponse;  }
    
    useEffect(()=>{
    getSessions()
    },[])
    
  // //To create a class
  // async function createClass(
  //   url = "http://127.0.0.1:5001/api/classes/create"
  // ) {
  //   const response = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data)
  //   });
  //   const jResponse = await response.json();
  //   console.log(jResponse);
  //   if (response.status === 401) {
  //     console.log(`${jResponse.message}`);
  //   } else {
  //     setSessions({ ...jResponse });
      
  //   }
  //   return jResponse;  }
    
    useEffect(()=>{
    getSessions()
    },[])

    return(
        <>
        <div>
              <section className="container-md" id="book_class">
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                <h5 className="m-4"><u>Instructor Details</u></h5>
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
                        disabled
                        value={userCtx.userDetails.level}
                        {...register("level", {
                          required: {
                            value: true,
                            message: "Please enter your level"
                          },
                        })}
                      />
                          <p className="text-danger text-center mt-2">{errors.age?.message}</p>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2 flex-column">
                        <button className="btn btn-secondary w-100 mb-4" type='submit'>Register</button>
                        <button className="btn btn-secondary w-100" type='cancel' onClick={()=>navigate('/student')}>Cancel</button>
                    </div>             
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
                    
                    <div className="col-md-4 mt-2">
                    <select class="form-select" aria-label="Default select example" 
                    {...register("time", {
                        required: {
                          value: true,
                          message: "Please select your preferred time"
                        },
                      })}>
                        <option value=''>Preferred Session</option>
                        {sessions?Object.values(sessions).map((session)=> (<option value={session.id}>{session.start_time} - {session.end_time}</option>)):""}
                    </select>
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
        </>
    )
}
export default CreateAClassForm