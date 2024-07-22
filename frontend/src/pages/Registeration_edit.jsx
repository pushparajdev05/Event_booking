import React,{useState,useEffect} from 'react';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Registeration_edit() {

        const [userForm,setUserForm]=useState({
                customer:"",
                event:"",
                date: "",
                seat: "",
                ticket: ""
            });
            let params=useParams();
            let navigate=useNavigate();
            const inputsHandler = (e) => {
                setUserForm((prevNext)=>({
                    ...prevNext,
                    [e.target.name]: e.target.value,
                }
                ));
            };
        const onUpdate=(e)=>
        {
            e.preventDefault();
            axios.put("http://localhost:4000/customers/update-customer/"+params.id,{
                customer:userForm.customer,
                event:userForm.event,
                date: userForm.date,
                seat: userForm.seat,
                ticket: userForm.ticket
            })
            .then((res)=>{
                console.log({status:res.status});
                navigate("/Registered-list");
            }).catch()
            {
                console.log("error");
            }
        };
        useEffect(()=>{
        axios.get("http://localhost:4000/customers/get-customer/"+params.id)
        .then((res)=>{
            setUserForm({
                customer:res.data.data.customer,
                event:res.data.data.event,
                date: res.data.data.date,
                seat: res.data.data.seat,
                ticket: res.data.data.ticket
            });
        });
        },[]);

  return (
            <div id="registeration">
                    <h4 className='h1' style={{color:'white'}}>Event Registration</h4>
                    <div className="form_element">
                        <form onSubmit={onUpdate}>
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
                            <button type="submit" className="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
  )
}

export default Registeration_edit