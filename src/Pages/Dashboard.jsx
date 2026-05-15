import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

function Dashboard() {
    const context=useContext(UserContext);
    console.log(context);
    const { user } = context;
    return (
        <div className="p-6 bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-3xl font-bold mb-4">Welcome, {user.fullName}</p>
            </div>
            <div className="space-y-4">
                <p className="text-lg"><span className="font-semibold"> Name:</span> {user.fullName}</p>
                <p className="text-lg"><span className="font-semibold">Email:</span> {user.email}</p>
                <p className="text-lg"><span className="font-semibold">Favourite Food:</span> {user.favouriteFood}</p>
                <p className="text-lg"><span className="font-semibold">Mobile No:</span> {user.mobileNo}</p>
                <p className="text-lg"><span className="font-semibold">Role:</span> Frontend Developer</p>
                <p className="text-lg"><span className="font-semibold">Skills:</span> HTML,CSS,JavaScript,Reactjs</p>
                <p className="text-lg"><span className="font-semibold">Location:</span> Hyderabad</p>
                <p className="text-lg"><span className="font-semibold">Experience:</span> Fresher</p>
                <p className="text-lg"><span className="font-semibold">Education:</span> MCA</p>
            </div>
        </div>
    )
}

export default Dashboard;