import userEvent from '@testing-library/user-event'
import { useEffect, useState, useRef, React } from 'react'


export const GenderInput = () => {
    const genderRef = useRef(null);

    function handleClick (e) {
        e.preventDefault();

        console.log(genderRef.current.value);
    }
    
    return(
        <div>
            <label htmlFor="gender">Gender</label>
            <input id="gender" ref={genderRef}></input>
            <button onClick={handleClick}></button>
        </div>
    )
}

