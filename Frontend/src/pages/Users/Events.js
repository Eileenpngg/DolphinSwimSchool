import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../context'

const Events=()=>{
const userctx= useContext(UserContext)
const navigate= useNavigate();
console.log(userctx.userDetails.is_instructor) 
return(
<>
<h1 className='text-center m-4'>Events</h1>
<div className="row justify-content-center align-items-end mb-4">
<div className="col-1"></div>
  <div className="col-4 d-flex justify-content-center flex-row  h-50">
    <img
      src='/holiday_camp.jpeg'
      alt="kid_swimming"
      className="bg-dark"
    />
    </div>
    <div className="col-3 d-flex flex-column align-item-center h-50">
    <h1 className='text-center m-4'>Display 5</h1>
    <p className={`text-center d-flex m-0`}>
    Lorem ipsum dolor sit amet, onsectetur adipiscing elit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </p>
    </div>
    <div className="col-3 d-flex flex-column h-100">
    {userctx.userDetails.is_instructor?<button className="btn btn-secondary w-25" type='submit' onClick={()=> navigate('/edit-event')}>Edit event</button>:" "}
    {/* calls an api when sign up button is clicked and pass in student information to the correct id into the segregatted table event_student */}
    {userctx.userDetails.is_instructor?<button className="btn btn-secondary w-25 mt-4" type='submit' onClick={()=> navigate('/event-details')}>View Details</button>:<button className="btn btn-secondary w-25 mt-4" type='submit' onClick={()=> navigate('/event-sign-up')}>Sign Up</button>}
    {userctx.userDetails.is_instructor?<button className="btn btn-secondary w-25 mt-4" type='submit' onClick={()=> navigate('/edit-event')}>Delete events</button>:" "}
    </div>
</div>

<div className="row justify-content-center align-items-end mb-4">
<div className="col-1"></div>
  <div className="col-4 d-flex justify-content-center flex-row align-item-center h-50">
    <img
      src='/holiday_camp.jpeg'
      alt="kid_swimming"
      className="bg-dark"
    />
    </div>
    <div className="col-3 d-flex flex-column align-item-center h-50">
    <h1 className='text-center m-4'>Display 5</h1>
    <p className={`text-center d-flex m-0`}>
    Lorem ipsum dolor sit amet, onsectetur adipiscing elit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </p>
    </div>
    <div className="col-3 d-flex flex-column h-100">
    {userctx.userDetails.is_instructor?<button className="btn btn-secondary w-25" type='submit' onClick={()=> navigate('/edit-event')}>Edit event</button>:" "}
    {/* calls an api when sign up button is clicked and pass in student information to the correct id into the segregatted table event_student */}
    {userctx.userDetails.is_instructor?<button className="btn btn-secondary w-25 mt-4" type='submit' onClick={()=> navigate('/event-details')}>View Details</button>:<button className="btn btn-secondary w-25 mt-4" type='submit' onClick={()=> navigate('/event-sign-up')}>Sign Up</button>}
    {userctx.userDetails.is_instructor?<button className="btn btn-secondary w-25 mt-4" type='submit' onClick={()=> navigate('/edit-event')}>Delete events</button>:" "}
    </div>
</div>

<div className="row justify-content-center align-items-end mb-4">
<div className="col-1"></div>
  <div className="col-4 d-flex justify-content-center flex-row align-item-center h-50">
    <img
      src='/holiday_camp.jpeg'
      alt="kid_swimming"
      className="bg-dark"
    />
    </div>
    <div className="col-3 d-flex flex-column align-item-center h-50">
    <h1 className='text-center m-4'>Display 5</h1>
    <p className={`text-center d-flex m-0`}>
    Lorem ipsum dolor sit amet, onsectetur adipiscing elit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </p>
    </div>
    <div className="col-3 d-flex flex-column h-200">
    {userctx.userDetails.is_instructor?<button className="btn btn-secondary w-25" type='submit' onClick={()=> navigate('/edit-event')}>Edit event</button>:" "}
    {/* calls an api when sign up button is clicked and pass in student information to the correct id into the segregatted table event_student */}
    {userctx.userDetails.is_instructor?<button className="btn btn-secondary w-25 mt-4" type='submit' onClick={()=> navigate('/event-details')}>View Details</button>:<button className="btn btn-secondary w-25 mt-4" type='submit' onClick={()=> navigate('/event-sign-up')}>Sign Up</button>}
    {userctx.userDetails.is_instructor?<button className="btn btn-secondary w-25 mt-4" type='submit' onClick={()=> navigate('/edit-event')}>Delete events</button>:" "}
    </div>
</div>
</>
)
}

export default Events