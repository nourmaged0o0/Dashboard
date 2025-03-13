import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const Edit = () => {
  const { id } = useParams();
  const url = "https://fake-form.onrender.com/api/students";
  const [user, setUser] = useState(false);
  const [err, setError] = useState("");
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const getStudents = () => {
    axios.get(url + "/" + id).then((response) => {
      setUser(response.data.data);
    });
  };

  useEffect(() => {
    getStudents();
  }, []);

  const send = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("Loading...");

    try {
      await axios.patch(`${url}/${id}`, user);
      navigate("/students");
    } catch (error) {
      setError(error.response?.data?.message || "Failed to update student.");
    } finally {
      setLoading(false);
    }
  };

  const edited = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (!user) {
    return <Loader />;
  }

  return (
    <div className="ml-[17rem] mr-[1rem] w-full text-black">
      <form className="py-1" onSubmit={send}>
        <div className="mt-[20px]">
          <div className="mb-[20px]">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={user?.name || ""}
              id="name"
              onChange={edited}
              className="w-[100%] p-[10px] rounded-[5px] border border-gray-300 bg-white"
            />
          </div>
          <div className="mb-[20px]">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user?.email || ""}
              id="email"
              onChange={edited}
              className="w-[100%] p-[10px] rounded-[5px] bg-white border border-gray-300"
            />
          </div>
          <div className="mb-[20px]">
            <label htmlFor="phone" className="block">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={user?.phone || ""}
              id="phone"
              onChange={edited}
              className="w-[100%] p-[10px] rounded-[5px] bg-white border border-gray-300"
            />
          </div>
          <div className="mb-[20px]">
            <label htmlFor="age" className="block">
              Age
            </label>
            <input
              type="text"
              name="age"
              value={user?.age || ""}
              id="age"
              onChange={edited}
              className="w-[100%] p-[10px] rounded-[5px] bg-white border border-gray-300"
            />
          </div>
          <div className="mb-[20px]">
            <label htmlFor="level" className="block">
              Level
            </label>
            <input
              type="text"
              name="level"
              value={user?.level || ""}
              id="level"
              onChange={edited}
              className="w-[100%] p-[10px] rounded-[5px] bg-white border border-gray-300"
            />
          </div>
          <div className="mb-[20px]">
            <label htmlFor="university" className="block">
              University
            </label>
            <input
              type="text"
              name="university"
              value={user?.university || ""}
              id="university"
              onChange={edited}
              className="w-[100%] p-[10px] rounded-[5px] bg-white border border-gray-300"
            />
          </div>
          <div className="mb-3 text-lg text-[#c40f12] font-bold">{err}</div>
          <div className="mb-[20px]">
            <button
              type="submit"
              disabled={loading}
              className={`p-[10px] rounded-[5px] w-full mb-1 text-xl ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#700608] text-white"
              }`}
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
          <div className="mb-[20px]">
            <button
              type="button"
              onClick={() => navigate("/students")}
              className="bg-[#700608] text-white p-[10px] rounded-[5px] w-full text-xl"
            >
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Edit;
