import React from "react";

const PackageForm=()=>{
    const handlePurchase=()=>{
        
    }
return (
    <>
    <h1 className="display-5 text-center">Packages</h1>

    <div className="row m-4">
    <div className="col-3"></div>
    <div className="col-6 d-flex justify-content-center flex-column align-item-center h-100">
    <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off"/>
    <label class="btn btn-secondary" for="option1">1 month package<p>4 sessions - 45 mins per session</p></label>
    </div>
    <div className="col-3"></div>
    </div>

    <div className="row m-4">
    <div className="col-3"></div>
    <div className="col-6 d-flex justify-content-center flex-column align-item-center h-100">
    <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" checked/>
    <label class="btn btn-secondary" for="option2">6 months package<p>24 sessions - 45 mins per session</p></label>
    </div>
    <div className="col-3"></div>
    </div>

    <div className="row m-4">
    <div className="col-3"></div>
    <div className="col-6 d-flex justify-content-center flex-column align-item-center h-100">
    <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off"/>
    <label class="btn btn-secondary" for="option3">1 Year package<p>48 sessions - 45 mins per session</p></label>
    </div>
    <div className="col-3"></div>
    </div>

    <div className="row m-4 justify-content-center">
    <div className="col-3"></div>
    <div className="col-6 d-flex flex-row h-100">
    <button className="btn btn-secondary w-25" type='submit' onClick={handlePurchase} >Purchase</button>
    </div>
    <div className="col-3"></div>
    </div>

    </>
)
}
export default PackageForm