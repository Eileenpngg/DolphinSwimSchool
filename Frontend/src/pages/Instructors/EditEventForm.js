import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const EditEventForm = ({ event }) => {
  const navigate = useNavigate();
  //react-hook-forms functionality

  const [id, setId] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    navigate("/events");
  };

  const onError = (errors) => {
    console.log(errors);
  };

  const handleClick = (e) => {
    setId(e.target.value);
    console.log(id);
    // getEvent()
  };

  // // To get a event
  //   async function getEvent(
  //     url = `http://127.0.0.1:5001/api/event/${id}`,
  //   ) {
  //     const response = await fetch(url, {
  //       method: "GET",
  //       headers: {
  //         "Accept": "application/json",
  //         "Content-Type": "application/json",
  //       }
  //     });
  //     const jResponse = await response.json();
  //     console.log(jResponse);
  //     if (response.status === 401) {
  //       console.log(`${jResponse.message}`);
  //     } else {
  //       setEvent({ ...jResponse });
  //     }
  //     return jResponse;  }

  //To edit event
  //   async function updateEvent({
  //     url = "http://127.0.0.1:5001/api/classes/create",
  //     data
  //   }) {
  //     const response = await fetch(url, {
  //       method: "PATCH",
  //       headers: {
  //         "Accept": "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data)
  //     });
  //     const jResponse = await response.json();
  //     console.log(jResponse);
  //     if (response.status === 401) {
  //       console.log(`${jResponse.message}`);
  //     } else {
  //       setSessions({ ...jResponse });

  //     }
  //     return jResponse;  }

  return (
    <>
      <button
        value={event.id}
        className="btn btn-secondary w-25"
        type="button"
        data-bs-toggle="modal"
        data-bs-target={`#myModal${event.id}`}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Edit Event
      </button>

      <div class="modal" id={`myModal${event.id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Event</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <div class="modal-body">
                <input
                  type="text"
                  placeholder="Title"
                  className="form-control mt-2"
                  defaultValue={event.title}
                  {...register("title", {
                    required: {
                      message: "Please insert title",
                    },
                  })}
                />
                <input
                  type="text"
                  placeholder="Image url"
                  className="form-control mt-2"
                  defaultValue={event.image}
                  {...register("image", {
                    required: {
                      message: "Please insert image url",
                    },
                  })}
                />
                <textarea
                  type="text"
                  placeholder="Insert description"
                  className="form-control mt-2"
                  defaultValue={event.description}
                  {...register("description", {
                    required: {
                      message: "Please insert description",
                    },
                  })}
                />

                <input
                  type="date"
                  className="form-control mt-2"
                  defaultValue={event.start_date}
                  {...register("start_date", {
                    required: {
                      message: "Please insert start_date",
                    },
                  })}
                />

                <input
                  type="date"
                  className="form-control mt-2"
                  defaultValue={event.end_date}
                  {...register("end_date", {
                    required: {
                      message: "Please insert end_date",
                    },
                  })}
                />
                <input
                  type="time"
                  className="form-control mt-2"
                  defaultValue={event.start_time}
                  {...register("start_time", {
                    required: {
                      message: "Please insert start time",
                    },
                  })}
                />
                <input
                  type="time"
                  className="form-control mt-2"
                  defaultValue={event.end_time}
                  {...register("end_time", {
                    required: {
                      message: "Please insert end time",
                    },
                  })}
                />
              </div>

              <div class="modal-footer">
                <button type="submit" class="btn btn-warning">
                  Edit
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );

  //     return(
  //         <>
  //         <div>
  //               <section className="container-md" id="book_class">
  //                 <form onSubmit={handleSubmit(onSubmit, onError)}>
  //                 <h5 className="m-4"><u>Instructor Details</u></h5>
  //                 <div className="form-outline m-4 row justify-content-center">
  //                     <div className="col-md-4">
  //                       <input
  //                         type="name"
  //                         className="form-control mt-2"
  //                         defaultValue={userCtx.userDetails.name}
  //                         {...register("name", {
  //                           required: {
  //                             value: true,
  //                             message: "Please enter your level"
  //                           },
  //                         })}
  //                       />
  //                       <p className="text-danger text-center mt-2">{errors.name?.message}</p>
  //                     </div>

  //                     <div className="col-md-4">
  //                       <input
  //                         type="age"
  //                         className="form-control mt-2"
  //                         defaultValue={userCtx.userDetails.level}
  //                         {...register("level", {
  //                           required: {
  //                             value: true,
  //                             message: "Please enter your level"
  //                           },
  //                         })}
  //                       />
  //                           <p className="text-danger text-center mt-2">{errors.age?.message}</p>
  //                     </div>
  //                     <div className="col-md-2"></div>
  //                     <div className="col-md-2 flex-column">
  //                         <button className="btn btn-secondary w-100 mb-4" type='submit'>Register</button>
  //                         <button className="btn btn-secondary w-100" type='cancel' onClick={()=>navigate('/student')}>Cancel</button>
  //                     </div>
  //                   </div>
  //                 <h5 className="m-4"><u>Class Details</u></h5>
  //                   <div className="form-outline m-4 row justify-content-center">
  //                     <div className="col-md-4">
  //                       <input
  //                         type="date"
  //                         className="form-control mt-2"
  //                         placeholder="Preferred Date"
  //                         {...register("date", {
  //                           required: {
  //                             value: true,
  //                             message: "Please insert your preferred date"
  //                           },
  //                         })}
  //                       />
  //                     <p className="mt-2 text-danger text-center">{errors.date?.message}</p>
  //                     </div>

  //                     <div className="col-md-4 mt-2">
  //                     <select class="form-select" aria-label="Default select example"
  //                     {...register("time", {
  //                         required: {
  //                           value: true,
  //                           message: "Please select your preferred time"
  //                         },
  //                       })}>
  //                         <option value=''>Preferred Session</option>
  //                         {sessions?Object.values(sessions).map((session)=> (<option value={session.id}>{session.start_time} - {session.end_time}</option>)):""}
  //                     </select>
  //                     <p className="mt-2 text-danger text-center">{errors.time?.message}</p>
  //                     </div>
  //                     <div className="col-md-1"></div>
  //                     <div className="col-md-3 align-self-end">
  //                     <img src="/xlab_logo.png" alt="" width="300px"/>
  //                     </div>
  //                     </div>

  //                 </form>
  //               </section>
  //             </div>
  //         )
  //         </>
  //     )
};
export default EditEventForm;
