import React from 'react'
import { useNavigate } from 'react-router-dom'
    

function Welcome() {
    const navigate = useNavigate();
    return (
        <>
            <div > welcome User</div>
             <button onClick={()=>navigate(-1)}>Go Back</button>
            </>
)
}

export default Welcome