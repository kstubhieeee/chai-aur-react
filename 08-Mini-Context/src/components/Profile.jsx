import { useContext } from "react"
import UserContext from './../context/UserContext';



function Profile() {

    const { user } = useContext(UserContext)

    if (!user) return <h1 className="bg-red-500 p-2 rounded-2xl">Please Login !</h1>

    return (
        <div style={{ fontSize: "30px" }} className="font-bold text-yellow-500">
            Welcome {user.username}
        </div>
    )
}

export default Profile
