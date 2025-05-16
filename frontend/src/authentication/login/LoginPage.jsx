import React, { useState } from "react";
import { useAuth } from "../../contex/auth-contex/AuthProvider";
import { loginHandller } from "../../services/loginHandller";
import { useDate } from "../../contex/date-contex/DateContex";
const LoginPage = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const contex = useAuth()
  const {dateDispatch} = useDate();
  const {authDispatch} = contex

  const handleLogin = (e) => {
    e.preventDefault();
    if (mobile.length !== 10 || !/^\d{10}$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setError("");
    authDispatch({
      phone:mobile,password
    })
    loginHandller(mobile,password,authDispatch)
    dateDispatch({
      type:"CLOSE"
    })
    console.log("wefouh")
    console.log("Logging in with:", { mobile, password });
  };

  return (
    <>
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md animate-fade-in">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Mobile Number</label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter your 10-digit number"
              maxLength={10}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter your password"
            />
          </div>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <button 
            type="submit"
            className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
