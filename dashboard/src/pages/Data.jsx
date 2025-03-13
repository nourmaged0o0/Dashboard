import React, { useEffect, useState } from "react";
import axios from "axios";
import { data, Link } from "react-router-dom";
import Loader from "../components/Loader";

const Data = () => {
  const url = "https://fake-form.onrender.com/api/students";

  const [users, setusers] = useState(false);

  const deleteStudent = (id) => {
    axios.delete(url + "/" + id).then((res) => {
      getStudents();
    });
  };

  const getStudents = () => {
    axios.get(url).then(function (response) {
      setusers(response.data.data);
    });
  };
  useEffect(() => {
    getStudents();
  }, [users]);
  if (!users) {
    return <Loader />;
  }

  return (
    <div className="ml-[15rem]">
      <h1 className=" font-bold m-8 text-black">Form Data</h1>
      <div className="w-[81.1vw] overflow-x-auto pr-3">
        <table className="w-full border border-[#eee] text-black">
          <thead>
            <tr className="h-10 border-b border-[#eee] font-bold">
              <th className="px-4 py-2">Id</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Level</th>
              <th className="px-4 py-2">University</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user?._id}
                className="h-10 border-b border-[#eee] text-center"
              >
                <td className="px-4 py-2">{user?._id}</td>
                <td className="px-4 py-2">{user?.name}</td>
                <td className="px-4 py-2">{user?.age}</td>
                <td className="px-4 py-2">{user?.email}</td>
                <td className="px-4 py-2">{user?.phone}</td>
                <td className="px-4 py-2">{user?.level}</td>
                <td className="px-4 py-2">{user?.university}</td>
                <td className="px-4 py-2 flex gap-2 justify-center">
                  <button
                    className="bg-[#e23535] text-white px-3 py-1 rounded"
                    onClick={() => deleteStudent(user._id)}
                  >
                    Delete
                  </button>
                  <Link to={`/students/${user._id}`}>
                    <button className="bg-[#00a300]  text-white px-3 py-1 rounded">
                      Edit
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Data;
