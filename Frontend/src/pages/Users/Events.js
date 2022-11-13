import React from 'react'

const Events=()=>{
return(
<>
<h1 className='text-center m-5'>Events</h1>
<div className="row justify-content-center align-items-end mb-4">
<div className="col-1"></div>
  <div className="col-5 d-flex justify-content-center flex-row align-item-center h-50">
    <img
      src='/kidswimming.jpeg'
      alt="kid_swimming"
      className="bg-dark"
    />
    </div>
    <div className="col-3 d-flex flex-column align-item-center h-50">
    <h1 className='text-center m-4'>Display 5</h1>
    <p className={`text-center d-flex m-0`}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </p>
    </div>
    <div className="col-3 flex-column h-100">
    {/* calls an api when sign up button is clicked and pass in student information to the correct id into the segregatted table event_student */}
    <button className="btn btn-secondary w-25" type='submit' >Sign Up</button>
    </div>
    <div className="col-1"></div>
</div>
</>
)
}

export default Events