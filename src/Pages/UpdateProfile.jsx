import { useContext, useState } from "react";

import { UserContext } from "../Context/UserContext";

function UpdateProfile() {

  const { user, setUser } = useContext(UserContext);

  const [updatedUser, setUpdatedUser] =
    useState(user);

  function handleChange(e) {

    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value
    });

  }

  function handleSubmit(e) {

    e.preventDefault();

    setUser(updatedUser);

    alert("Profile Updated");
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md max-w-xl mx-auto"
      >

        <p className="text-3xl font-bold mb-6">
          Update Profile
        </p>

        <input
          type="text"
          name="fullName"
          value={updatedUser.fullName}
          onChange={handleChange}
          placeholder="Enter Full Name"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="email"
          name="email"
          value={updatedUser.email}
          onChange={handleChange}
          placeholder="Enter Email"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="text"
          name="favouriteFood"
          value={updatedUser.favouriteFood}
          onChange={handleChange}
          placeholder="Favourite Food"
          className="w-full border p-3 rounded-lg mb-6"
        />

        <input
          type="num"
          name="mobileNo"
          value={updatedUser.mobileNo}
          onChange={handleChange}
          placeholder="Mobile No"
          className="w-full border p-3 rounded-lg mb-6"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Update
        </button>

      </form>

    </div>
  );
}

export default UpdateProfile;