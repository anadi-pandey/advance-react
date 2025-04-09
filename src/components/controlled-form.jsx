import React, { useRef, useState } from "react";

export const ControlledForm = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('Form Submission')
    };

    return (
        <form onSubmit={submitHandler}>
            <input name="Name" type="text" placeholder="Enter Name" value={name} onChange={(event) => {
                setName(event?.target?.value)
            }} />
            <input name="Age" type="number" placeholder="Enter Age" value={age} onChange={(event) => {
                setAge(event?.target?.value)
            }} />
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};