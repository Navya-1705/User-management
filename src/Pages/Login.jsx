import { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    favouriteFood: "",
    mobileNo:""
  });

  function handleChange(e) {

    setFormData({ ...formData, [e.target.name]: e.target.value });

  }

  function handleSubmit(e) {

    e.preventDefault();

    setUser(formData);

    navigate("/dashboard");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-96" >

        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <input type="text" name="fullName" placeholder="Enter Full Name" onChange={handleChange} className="w-full border p-3 rounded-lg mb-4" />

        <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} className="w-full border p-3 rounded-lg mb-4" />

        <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} className="w-full border p-3 rounded-lg mb-4" />

        <input type="text" name="favouriteFood" placeholder="Favourite Food" onChange={handleChange} className="w-full border p-3 rounded-lg mb-6" />

        <input type="text" name="mobileNo" placeholder="Mobile No" onChange={handleChange} className="w-full border p-3 rounded-lg mb-6" />

        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700" >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;