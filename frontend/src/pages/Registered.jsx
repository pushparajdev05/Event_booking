import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Registered() {
  const [userForm,setUserForm]=useState([]);
    const deleteCustomer=(_id)=>{
        console.log(_id);
        axios.delete("http://localhost:4000/customers/delete-customer/"+_id).then(()=>
        {
            console.log("Data successfully deleted!");
        }).catch((error)=>{
            console.log(error);
        });

    };

    useEffect(()=>{
        axios.get("http://localhost:4000/customers/")
        .then((res)=>{
            setUserForm(res.data.data);
        }).catch((error)=>
        {
            console.log(error);
        });
    },[userForm]); 
  return (
    <div id="registered_list">
      <div id="table">
        <table className='table'>
        <thead className='table-dark'>
          <tr>
            <th>Customer Name</th>
            <th>Event Name</th>
            <th className='num'>Booking Date</th>
            <th className='num'>Seat Number</th>
            <th className='num'>Ticket Price</th>
            <th>Action</th>
          </tr>
        </thead>
          <tbody>
            {userForm.map((user,index)=>{
                    return(
                        <tr key={index}>
                            <td>{user.customer}</td>
                            <td>{user.event}</td>
                            <td className='num'>{user.date}</td>
                            <td className='num'>{user.seat}</td>
                            <td className='num'>{user.ticket}</td>
                            <td className='btn_flex'>
                                <Link to={"/Registered-edit/"+user._id} className="btn btn-secondary">Edit</Link>
                                <button className="btn btn-danger btn_style" onClick={()=>deleteCustomer(user._id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
        </tbody>
      </table>
        </div>
    </div>
  )
}

export default Registered