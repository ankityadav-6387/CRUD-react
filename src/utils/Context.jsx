import { createContext, useState } from 'react'

export const userContext = createContext();


const Context = (props) => {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
    return (
        <userContext.Provider value={[users, setUsers]}>
            {props.children}
        </userContext.Provider>
    )
}

export default Context;