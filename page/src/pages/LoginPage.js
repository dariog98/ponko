import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUserLogInContext } from "../providers/UserProvider"
import userServices from "../services/users"

const LoginPage = () => {
    const handleLogIn = useUserLogInContext()
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const loginUser = async (event) => {
        event.preventDefault()
        const response = await userServices.login({ username, password })

        if (response.ok) {
            const userData = await response.json()
            if (userData) {
                handleLogIn(userData)
                setUsername("")
                setPassword("")
                navigate("/")
            }
        } else {
          console.log(response)
        }
    }

    return (
        <>
            <div className="flex justify-content-center aling-items-center">
                <form onSubmit={loginUser} className="flex flex-column gap-1">
                    <div>
                        <input type="text" value={username} placeholder="Username" onChange={({target}) => {setUsername(target.value)}} required/>
                    </div>
                    <div>
                        <input type="password" value={password} placeholder="Password" onChange={({target}) => {setPassword(target.value)}} required/>
                    </div>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </>
    )
}

export default LoginPage