import { useRef, React } from 'react'
import "./bruh.css"


export const Personal = () =>{
    const genderRef = useRef(null);
    const DOB_dateRef = useRef(null);
    const DOB_monthRef = useRef(null);
    const DOB_yearRef = useRef(null);
    const country_region = useRef(null);
    const city = useRef(null);

    function handleClick() {
        console.log(genderRef.current.value);
        console.log(DOB_dateRef.current.value);
    }

    return(
        <div>
            <input 
                name="genderRef"
                id="gender"
                type="text"
                placeholder="Gender"
                ref={genderRef}
            />
            <input 
                name="DOB_dateRef"
                id="DOB_Day"
                type="text"
                placeholder="Date"
                ref={DOB_dateRef}
            />
            <input 
                name="DOB_monthRef"
                id="DOB_Month"
                type="text"
                placeholder="Month"
                ref={DOB_monthRef}
            />
            <input 
                name="DOB_yearRef"
                id="DOB_Year"
                type="text"
                placeholder="Year"
                ref={DOB_yearRef}
            />
            <input 
                name="country_region"
                id="country"
                type="text"
                placeholder="Country"
                ref={country_region}
            />
            <input 
                name="city"
                id="city"
                type="text"
                placeholder="City"
                ref={city}
            /> 

            <button onClick={handleClick}>Submit</button>

        </div>
    )
}