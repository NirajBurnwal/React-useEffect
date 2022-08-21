// preserve value
// doesn't trigger re-render
// taget DOM nodes/elements

import React, {useEffect, useRef} from "react";
import '../forms/ControlledInput.css'

export const InputForm = () => {
    const refContainer = useRef(null)
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(refContainer.current.value);
    }
    // since useRef does not trigger re-render, we need not to set
    // dependency array for useEffect
    useEffect(()=>{
        console.log(refContainer.current.value)
        console.log(refContainer.current)
        refContainer.current.focus();
    })
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" ref={refContainer} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}