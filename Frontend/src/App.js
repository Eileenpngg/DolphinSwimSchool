import React,{useState, useEffect, useContext} from "react";
import LoginScreen from "./pages/Screens/LoginScreen";
import UserContext from "./context";
import { Route, Routes } from "react-router-dom";
import RegisterScreen from "./pages/Screens/RegisterScreen";
import RegisterSuccess from "./pages/Screens/RegisterSuccess";
import InstructorLanding from "./pages/Instructors/InstructorLanding";
import StudentLanding from "./pages/Students/StudentLanding";
import BookClassForm from "./pages/Students/BookClassForm";
import PackageForm from "./pages/Students/PackageForm";
import Events from "./pages/Users/Events";
import EventForm from "./pages/Instructors/EventForm";
import CreateAClassForm from "./pages/Instructors/CreateAClassForm";
import ClassSchedule from "./pages/Instructors/ClassSchedule";
import CreateEventSuccess from "./pages/Screens/CreateEventSuccess";
import BookClassSuccess from "./pages/Screens/BookClassSuccess";
import Profile from "./pages/Users/Profile";
import About from "./pages/Users/About";

function App() {
  const [userDetails, setUserDetails] = useState({});
  const [remainingPackage, setRemainingPackage]=useState()

  const getPackage=async({
    url=`http://127.0.0.1:5001/api/packages/${userDetails.id}`
  })=>{
    const response= await fetch(url, {
      method:'PUT',
      headers:{
        "Accept": "application/json",
        "Content-Type":'application/json'
      }
    });

    const jResponse= await response.json();
    if (response.status===401){
      console.log(`${jResponse.message}`)
    } else {
      console.log(jResponse)
      setRemainingPackage(jResponse.remaining)
    }
    return jResponse
  }

  useEffect(()=>{
    if(userDetails?.id){
      getPackage({})
    }
    },[userDetails])

  function displayLandingPage() {

  switch (userDetails.is_instructor) {
    case true:
      return (
        <InstructorLanding/>
      );
    case false:
      return (
        <StudentLanding/>
      );
    default:
      return <LoginScreen />;
  }
}
const landingPage = displayLandingPage();

// // Render the profile page depending on what type of user is logged in
// function displayProfilePage() {
//   switch (userDetails.type) {
//     case "jobSeeker":
//       return (
//         <JobSeekerProfile
//           profileIsCompleted={profileIsCompleted}
//           setProfileIsCompleted={setProfileIsCompleted}
//           profileData={profileData}
//           setProfileData={setProfileData}
//         />
//       );
//     case "employer":
//       return <EmployerProfile employerProfileData={employerProfileData} setEmployerProfileData={setEmployerProfileData}/>;
//     default:
//       return <Login />;
//   }
// }

  return (
    
<UserContext.Provider value={{ userDetails, setUserDetails }}>
<Routes>
<Route path="/" element={landingPage} />
<Route path="/login" element={<LoginScreen/>} />
<Route path="/register" element={<RegisterScreen/>} />
<Route path="/registersuccess" element={<RegisterSuccess/>} />
<Route path="/instructor" element={<InstructorLanding />} />
<Route path="/student" element={<StudentLanding />} />
<Route path="/book-a-class" element={<BookClassForm />} />
<Route path="/package-form" element={<PackageForm />} />
<Route path="/events" element={<Events />} />
<Route path="/event-form" element={<EventForm/>} />
<Route path="/create-a-class" element={<CreateAClassForm />} />
<Route path="/class-schedule" element={<ClassSchedule/>} />
<Route path="/create-event-success" element={<CreateEventSuccess/>} />
<Route path="/book-class-success" element={<BookClassSuccess/>} />
<Route path="/profile" element={<Profile remainingPackage={{remainingPackage}}/>} />
<Route path="/about" element={<About/>} />
</Routes>
</UserContext.Provider>

  );
}

export default App;

