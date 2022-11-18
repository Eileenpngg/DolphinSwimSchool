import React from "react"

const Navbar=()=>{
    return(
        <>
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
        </>
    )
    
}

export default Navbar