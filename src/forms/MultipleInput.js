import React, { UseEffect, useState } from 'react'

import './ControlledInput.css'
export const MultipleInput = () => {
    const [person, setPerson] = useState({firstName:'', email: '', age:''})
    const [people, setPeople] = useState([])

    const changeHandler = (e)=>{
        // the below event will target the field dynamically - that means either firstname,email or age
        const name = e.target.name
        // the below event will provide the respective input value that we will enter in the field 
        const value = e.target.value
        // console.log(name, value);
        setPerson({...person, [name]:value})
        // console.log(person.firstName, person.email, person.age)

    }
    const submitHandler = (e)=> {
        e.preventDefault();
        if(person.firstName && person.email && person.age){
            const newPerson = {...person, id: new Date().getTime().toString()}
            setPeople([...people, newPerson])
            setPerson({firstName:'', email: '', age:''})
        }else {
            alert('field can not be empty')
        }
    } 

    return (
        <>
            <article>
                <form >
                    <div className='firstname'>
                        <label htmlFor="firstName">Name : </label>
                        <input type="text" id='firstName' name='firstName' value={person.firstName} onChange={changeHandler} />
                    </div>
                    <div className='email'>
                        <label htmlFor="email">Email : </label>
                        <input type="text" id='email' name='email' value={person.email} onChange={changeHandler} />
                    </div>
                    <div className='age'>
                        <label htmlFor="age">Age : </label>
                        <input type="text" id='age' name='age' value={person.age} onChange={changeHandler} />
                    </div>
                    <button type='submit' onClick={submitHandler} >Add Person</button>
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