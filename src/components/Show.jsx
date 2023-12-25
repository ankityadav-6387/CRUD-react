import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userContext } from '../utils/Context';


const Show = () => {
    const [users, setUsers] = useContext(userContext);

    function deletehh(index) {
        const copyuser = [...users];
        copyuser.splice(index, 1);
        setUsers(copyuser);
        localStorage.setItem("users", JSON.stringify(copyuser));
        toast.warn('data deleteee')
        console.log(index);
    }


    return (
        <div>
            {
                users.map((item, index) => {
                    return <p className='w-1/3 justify-between rounded-lg items-center bg-slate-200 h-10 flex mt-2 px-10' to={`/show/details/${item.username}`} key={index}>
                         <NavLink className='capitalize' to={`/show/details/${item.username}`}>{item.username}</NavLink>
                        <span onClick={() => deletehh(index)}>❌</span>
                    </p>

                })
            }
        </div>
    )
}

export default Show