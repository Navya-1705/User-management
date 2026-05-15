import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
function FavouriteFood(){
    const { user } = useContext(UserContext);
    return(
        <div>
            <p className="text-3xl font-bold mb-4 text-center">Favourite Food: {user.favouriteFood}</p>
        </div>
    )
}

export default FavouriteFood;