import React from "react"
import styles from './studentlanding.module.css'
import { useNavigate } from "react-router-dom";

const StudentLanding=()=>{
  const navigate= useNavigate()
    return(
    <>
{/* Navbar */}
<ul class="nav nav-tabs justify-content-center">
<li class="nav-item">
    <a class="nav-link" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">About Us</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Term Schedule</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="#">Contact</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Profile</a>
    <ul class="dropdown-menu">
      <li><a class="view-profile" href="=/profile">Profile</a></li>
      <li><a class="logout" href="/">Logout</a></li>
    </ul>
  </li>
</ul>

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
    <p className={`text-center d-flex align-items-center justify-content-center m-0 p-4 w-100 ${styles.card}`} onClick={()=>{navigate('/book-a-class')}}>
    Book A Class
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
    <p className={`text-center d-flex align-items-center justify-content-center m-0 p-4 w-100 ml-1 ${styles.card}`} onClick={()=>{navigate('/package-form')}}>
    Purchase A package   
    </p>
  </div>
</div>
</div>
</>
    )
}
export default StudentLanding