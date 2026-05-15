import { Link } from "react-router-dom";

function Sidebar() {

  return (
    <div className="w-64 min-h-screen bg-blue-900 text-white p-5">

      <h2 className="text-2xl font-bold mb-6">
        Menu
      </h2>

      <ul className="space-y-4">

        <li>
          <Link to="/dashboard" className="hover:text-yellow-400" >
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/profile" className="hover:text-yellow-400" >
            Profile
          </Link>
        </li>

        <li>
          <Link to="/food" className="hover:text-yellow-400" >
            Favourite Food
          </Link>
        </li>

        <li>
          <Link to="/update-profile" className="hover:text-yellow-400" >
            Update Profile
          </Link>
        </li>

        <li>
          <Link to="/settings" className="hover:text-yellow-400" >
            Settings
          </Link>
        </li>

      </ul>

    </div>
  );

}

export default Sidebar;