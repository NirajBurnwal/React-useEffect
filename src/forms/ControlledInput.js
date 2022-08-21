import React, { UseEffect, useState } from 'react'

import './ControlledInput.css'
export const ControlledInput = () => {
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [people, setPeople] = useState([])

    const submitHandler = (e) => {
        e.preventDefault();

        if (firstName && email) {
            const person = {id: new Date().getTime().toString() , firstName: firstName, email: email }

            setPeople((people) => {
                return [...people, person]
            })
            // we can also setPeople like this in shortcut way
            // setPeople([...people, person])
            
            setFirstName('')
            setEmail('')
        } else {
            alert('Empty Fields')
        }
    }
    return (
        <>
            <article>
                <form onSubmit={submitHandler} >
                    <div>
                        <label htmlFor="firstName">Name : </label>
                        <input type="text" id='firstName' name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email : </label>
                        <input type="text" id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button type='submit'>Add Person</button>
                </form>
                { people.map((person, index)=>{
                    const {id, firstName, email} = person
                    return (
                        <div className='item' key={id}>
                            <h4>{firstName}</h4>
                            <p> {email} </p>
                        </div>
                    )
                }) }
            </article>
        </>
    )
}