import React from "react"
import { useNavigate } from "react-router-dom"
import styles from './instructorlanding.module.css'
import Navbar from "../../Navbar"
const InstructorLanding=()=>{
const navigate= useNavigate();

    return(
    <>
{/* Navbar */}
<Navbar/>
{/* Content */}
<div className="my-5">
<h1 className="display-5">Raising Active, Confident And Growth-Minded Children Through Sports</h1>
<div className="row">
  <div className="col-4 d-flex justify-content-center flex-column align-item-center h-100">
    <img
      src='/kidswimming.jpeg'
      alt="kid_swimming"
      className="bg-dark"
    />
    <p className={`text-center d-flex align-items-center justify-content-center m-0 p-4 w-100 ${styles.card}`} onClick={()=>{navigate('/create-a-class')}}>
    Create A Class
    </p>
  </div>
  <div className="col-4 d-flex justify-content-center flex-column align-item-center h-100">
  <img src='/events.jpeg' height='330vw' alt="task icon to job list" />
    <p className={`text-center d-flex align-items-center justify-content-center m-0 p-4 w-100 ${styles.card}`} onClick={()=>{navigate('/events')}}>
    Events
    </p>
  </div>
  <div className="col-4 d-flex justify-content-center flex-column align-item-center h-100">
  <img src='/purchasepackage.webp' alt="task icon to job list" />
    <p className={`text-center d-flex align-items-center justify-content-center m-0 p-4 w-100 ml-1 ${styles.card}`} onClick={()=>{navigate('/class-schedule')}}>
    View Class Schedules
    </p>
  </div>
</div>
</div>
</>
    )
}
export default InstructorLanding