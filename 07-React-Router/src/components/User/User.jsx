import { useParams } from "react-router-dom"


function User() {
    const { userid } = useParams()

    return (
        <div>
            <center>
                <h1>User : {userid} </h1>
            </center>
        </div>
    )
}

export default User
