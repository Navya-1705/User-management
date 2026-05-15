import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import FavouriteFood from "./Pages/FavouriteFood";
import UpdateProfile from "./Pages/UpdateProfile";
import Settings from "./Pages/Settings";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        
        <Route path="/" element={<Login />} />

        
        <Route
          path="/dashboard"
          element={
            <>
              <Navbar />

              <div className="flex">
                <Sidebar />
                <Dashboard />
              </div>
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <Navbar />

              <div className="flex">
                <Sidebar />
                <Profile />
              </div>
            </>
          }
        />

        <Route
          path="/food"
          element={
            <>
              <Navbar />

              <div className="flex">
                <Sidebar />
                <FavouriteFood />
              </div>
            </>
          }
        />

        <Route
          path="/update-profile"
          element={
            <>
              <Navbar />

              <div className="flex">
                <Sidebar />
                <UpdateProfile />
              </div>
            </>
          }
        />

        <Route
          path="/settings" element={ 
            <>
              <Navbar />

              <div className="flex">
                <Sidebar />
                <Settings />
              </div>
            </> } />
         <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;