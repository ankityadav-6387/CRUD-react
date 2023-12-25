import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Details = () => {

    const Navigate = useNavigate();
    const { title } = useParams();


    function clickHandler() {
        Navigate(-1);
    }

    return (
        <div className='card px-10'>
            <p className='border bg-slate-400 text-white capitalize rounded-md block w-1/4 h-10'>👋 Hello ji {title}</p>
            <button
                className='border border-black rounded-md bg-green-400  px-5 py-2 mt-10'
                onClick={clickHandler}
            >Go Back</button>
        </div>
    )
}

export default Details