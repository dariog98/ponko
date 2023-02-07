import { Link, useNavigate } from "react-router-dom"
import { RouteAPI } from "../constants/RoutesAPI";
import { RouteNavigation } from "../constants/RoutesNavigations"
import { useUserContext } from "../providers/UserProvider"

const Navbar = () => {
    const user = useUserContext()
    const navigate = useNavigate()

    const handleLogInButton = () => {
        navigate(RouteNavigation.Login)
    }

    return (
        <div className="navbar flex justify-content-around align-items-center">
            <Link to="/"><h1>Ponko</h1></Link>
            
            <div className="flex align-items-center gap-1">
                {user 
                    ? <>
                        <div>{
                            user.avatar 
                            ? <img className="user-avatar" src={`${RouteAPI.Images}/${user.avatar.image.filename}`} alt=""/>
                            : <div className="user-avatar"><div className="temp-avatar" style={{ backgroundColor: user.color }}><div>{user.username.charAt(0)}</div></div></div>
                        }</div>
                        <Link to={`/${user.username}`}><div style={{fontWeight: "bold"}}>{user.username}</div></Link>
                    </>
                    : <div>
                        <button onClick={handleLogInButton}>Log In</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar
