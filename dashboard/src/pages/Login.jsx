import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); 

    try {
      const response = await axios.post("https://fake-form.onrender.com/api/login", {
        email,
        password,
      });

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        navigate("/"); 
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      console.log(err)
      setError(err.response.data.message);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#222]">
      <form
        onSubmit={handleLogin}
        className="w-[350px] flex flex-col justify-center items-center bg-[#f6f6f6] rounded-[5px] text-black py-[20px] px-[10px]"
      >
        <img src={logo} alt="logo" className="w-[150px] my-[20px] mx-auto" />

        {error && <p className="text-red-600 mb-3">{error}</p>}

        <div className="w-full mb-[15px]">
          <label className="mb-1 text-black block" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-[8px] px-2 w-full bg-white border-[1px] border-[#eee]"
            required
          />
        </div>

        <div className="w-full mb-[15px]">
          <label className="mb-1 text-black block" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-[8px] mb-3 px-2 w-full bg-white border-[1px] border-[#eee]"
            required
          />
        </div>

        <button type="submit" className="bg-[#700608] py-2 px-6 w-full text-white">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
