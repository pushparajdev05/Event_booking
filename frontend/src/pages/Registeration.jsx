import React, { useState } from 'react';
import axios from "axios";
function Registeration() {

    const [userForm,setUserForm]=useState({
        customer:"",
        event:"",
        date: "",
        seat: "",
        ticket: ""
    });

const inputsHandler = (e) => {
    setUserForm((prev)=>({
        ...prev,
        [e.target.name]: e.target.value,
    }
    ));
};
const onSubmit=(e)=>
{
    e.preventDefault();
    axios.post("http://localhost:4000/customers/create-customer",userForm)
    .then((res)=>{
        console.log(res.data);
        setUserForm({
            customer:"",
            event:"",
            date: "",
            seat: "",
            ticket: ""
        });
    }).catch((err) =>
    {
        console.log(err);
    })
};
  return (
      <div id="registeration">
          <h4 className='h1' style={{color:'white'}}>Event Registration</h4>
          <div className="form_element">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Customer Name</label>
                      <input type="text" name="customer" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={ userForm.customer} onChange={inputsHandler}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Event Name</label>
                    <input type="text" name="event" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={ userForm.event} onChange={inputsHandler}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Booking Date</label>
                    <input type="date" name="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userForm.date} onChange={inputsHandler}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Seat Number</label>
                    <input type="number" name="seat" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={ userForm.seat} onChange={inputsHandler}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Ticket Price</label>
                    <input type="number" name="ticket" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={ userForm.ticket } onChange={inputsHandler}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
    </div>
  )
}

export default Registeration