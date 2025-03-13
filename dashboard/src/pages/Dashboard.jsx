import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Data from "./Data";
import Loader from '../components/Loader'

const Dashboard = () => {

  const url = "https://fake-form.onrender.com/api/students";

  const [users,setusers]=useState(false)

  const navigate =useNavigate();

  const getStudents = () => {
    axios.get(url).then(function (response) {
      setusers(response.data.data);
    });
  };
  useEffect(() => {
    getStudents();
  }, []);

  if (!users) {
    return (<Loader/>)
  }
  
  return (
    <div className="ml-[15rem]">
      <h1 className=" font-bold m-8 text-black">Hello !</h1>
      <p className="text-black m-8 mb-4 w-full">Welcome to Dashboard</p>
      <div className="w-[81.1vw] overflow-x-auto">
      <table className="w-full border border-[#eee] text-black">
        <thead>
          <tr className="h-10 border-b border-[#eee]  font-bold">
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Age</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Level</th>
            <th className="px-4 py-2">University</th>
          </tr>
        </thead>
        <tbody>
          {users.slice(0, 6).map((user) => (
            <tr key={user?._id} className="h-10 border-b border-[#eee] text-center">
              <td className="px-4 py-2">{user?._id}</td>
              <td className="px-4 py-2">{user?.name}</td>
              <td className="px-4 py-2">{user?.age}</td>
              <td className="px-4 py-2">{user?.email}</td>
              <td className="px-4 py-2">{user?.phone}</td>
              <td className="px-4 py-2">{user?.level}</td>
              <td className="px-4 py-2">{user?.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      <div className="w-full h-[6rem] flex justify-center items-center">

      <button onClick={()=>{
        navigate("/students")
      }} className=" text-center mt-[20px] text-white text-2xl bg-[#700608] py-[5px] px-[10px] rounded-[6px]">View All Data</button>
      </div>
    </div>
  )
}

export default Dashboard