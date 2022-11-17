import React from "react";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutline";

const BookClassSuccess = () => {
  return (
    <div>
      <h1 className="text-center">Registration!</h1>
      <div
        className="d-flex justify-content-center m-5"
        style={{ transform: "scale(3)", color: "green" }}
      >
        <CheckCircleOutlinedIcon />
      </div>
      <p className="text-center">
            <a
              className="link-primary"
              id="Login"
              href="/book-a-class"
            >
              Book Another Class
            </a>
          </p>
    </div>
  );
};

export default BookClassSuccess;







