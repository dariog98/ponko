import { createContext, useContext, useState } from "react";

const userContext = createContext()
const userLogInContext = createContext()
const userLogOutContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const handleLogIn = (user) => {
        setUser(user)
        localStorage.setItem('medicappLoggedUser', JSON.stringify(user))
    }

    const handleLogOut = () => {
        localStorage.removeItem('medicappLoggedUser')
        setUser(null)
    }

    const medicappLoggedUser = localStorage.getItem('medicappLoggedUser')

    if (!user && medicappLoggedUser) {
        try {
            const userData = JSON.parse(medicappLoggedUser)
            setUser(userData)
        } catch (error) {
            //Do nothing
        }
    }

    return (
        <userContext.Provider value={user}>
            <userLogInContext.Provider value={handleLogIn}>
                <userLogOutContext.Provider value={handleLogOut}>
                    {children}
                </userLogOutContext.Provider>
            </userLogInContext.Provider>
        </userContext.Provider>
    )
}

const useUserContext = () => {
    return useContext(userContext)
}

const useUserLogInContext = () => {
    return useContext(userLogInContext)
}

const useUserLogOutContext = () => {
    return useContext(userLogInContext)
}

export { UserProvider, useUserContext, useUserLogInContext, useUserLogOutContext }