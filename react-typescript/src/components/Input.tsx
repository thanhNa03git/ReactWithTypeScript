import React from "react"

type InputProps = {
    value : string,
    handlerChange : (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) =>{
    const handlerInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event, event.target.value);
        
    }
    return (
        <>
            <input id="myField" type="text" value={props.value} onChange={handlerInputChange}/>
        </>
    )
}