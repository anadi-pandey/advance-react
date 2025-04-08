import React, { useRef } from "react";

export const UncontrolledForm = () => {
    const inputNameRef = useRef();
    const inputAgeRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(
            'Refs:',
            inputNameRef.current?.value,
            inputAgeRef.current?.value
        );
    };

    return (
        <form onSubmit={submitHandler}>
            <input name="Name" type="text" placeholder="Enter Name" ref={inputNameRef} />
            <input name="Age" type="number" placeholder="Enter Age" ref={inputAgeRef} />
            <div>
            <input type="submit" value="Submit" />
            </div>
        </form>
    );
};