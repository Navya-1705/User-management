import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

function Profile(){
    const { user } = useContext(UserContext);

    return(
        <div className="text-center p-6 bg-gray-100 ">
            <h1>Profile</h1>
            <p>Name: {user.fullName}</p>
            <p>Email: {user.email}</p>
            <p>Favourite Food: {user.favouriteFood}</p>
            <p>Mobile No: {user.mobileNo}</p>
        </div>
    )
}

export default Profile; 