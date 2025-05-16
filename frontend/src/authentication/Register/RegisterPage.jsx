import React, { useState } from "react";
import { useAuth } from "../../contex/auth-contex/AuthProvider";
import { singUpHandller } from "../../services/singUpHandller";
const RegisterPage = () => {
  const [form, setForm] = useState({
    phone: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const {authDispatch,name,email,password,phone,response} = useAuth();
  // function handleSubmitClick(){
  //   singUpHandller(name,email,password,phone,authDispatch)
  //   console.log(response)
  //   if(response){
  //     alert("EMAIL OR PHONE ALREADY EXIST PLEASE LOGIN WITH DIFFERNT EMAIL OF PASSS")
  //     return;
  //   }
  //   else{
  //     authDispatch({
  //     type:"USER-DETAILS",
  //     payload:form
  //     })
  //   }
  // }
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit =  (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(form.phone)) {
      setError("phone number must be 10 digits.");
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    console.log(response)
    singUpHandller(name,email,password,phone,authDispatch,form)
    // console.log(response)
    if(!response){
      alert("EMAIL OR PHONE ALREADY EXIST PLEASE LOGIN WITH DIFFERNT EMAIL OF PASSS")
      return;
    }
  };

  return (
    <>
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500"
              placeholder="10-digit phone number"
              maxLength={10}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500"
              placeholder="Repeat your password"
            />
          </div>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <button 
            type="submit"
            className="cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
