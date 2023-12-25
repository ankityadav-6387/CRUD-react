import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userContext } from '../utils/Context';

const Create = () => {
    const[users,setUsers]=useContext(userContext);

    const Navigate = useNavigate();
    const [formData, setformData] = useState({    
        username: '',
        password: '',
    })

    function changeHandler(event) {
        const { value, name } = event.target;
        setformData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        })
    }

    function submithandler(event) {
        event.preventDefault();
        const newUser = [...users, formData];
       
        if (formData.username.trim().length < 4 && formData.password.trim().length < 4) {
            toast.error('Must have uju  ')
            return;
        }
        setUsers(newUser);
        // setUsers((prev)=>{
        //     return [
        //         ...prev,
        //         formData,
        //     ]
        // });
        localStorage.setItem("users", JSON.stringify(newUser));
        toast.success('Add data')
        setformData({
            username: '',
            password: '',
        })
        Navigate('/show')
    }


    return (
        <div className='flex flex-col items-center justify-center pt-20 w-full'>
            <h2 className='text-3xl font-semibold py-3 text-zinc-800'>Register User</h2>
            <form className='w-1/5' onSubmit={submithandler}>
                <input
                    type="text"
                    placeholder='Username'
                    name='username'
                    onChange={changeHandler}
                    value={formData.username}
                    className='px-5 w-full py-2 border-2 border-black'
                />
                <br />
                <br />
                <input
                    type="password"
                    placeholder='xxxxxxx'
                    name='password'
                    onChange={changeHandler}
                    value={formData.password}
                    className='px-5 w-full py-2 border-2 border-black'
                />
                <br /><br />
                <button className='bg-zinc-800 text-zinc-100 px-5 py-2'>Register User</button>
            </form>
            <hr className='w-1/2 mt-5' />
        </div>
    )
}

export default Create