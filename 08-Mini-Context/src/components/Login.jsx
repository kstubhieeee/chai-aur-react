
import { useContext, useState } from 'react';
import UserContext from './../context/UserContext';

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { setUser } = useContext(UserContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        setUser({ username, password })
    }

    return (
        <div className='bg-black text-white mt-10 mb-8 rounded-3xl'>
            <br />
            <h1>Login Page</h1>
            <br />
            <br />
            <input
                type="text"
                value={username}
                className='p-2 rounded-lg'
                placeholder='Username'
                onChange={(event) => {
                    setUsername(event.target.value)
                }}
            />
            <br />
            <br />
            <input
                type="text"
                value={password}
                className='p-2 rounded-lg'
                placeholder='Password'
                onChange={(event) => {
                    setPassword(event.target.value)
                }}
            />
            <br />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <br />
            <br />
        </div>
    )
}

export default Login
