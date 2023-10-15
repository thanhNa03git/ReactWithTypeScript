import { useState } from 'react';
type Author = {    
    name: string,
    email: string,
    phone: number
}

export const User = (props: Author) =>{
    const [loggedIn, setLoggIn] = useState<Author | null>(null);
    
    const handlerLoggIn = () => {
        setLoggIn({
            name: props.name,
            email: props.email,
            phone: props.phone
        });
        console.log(loggedIn)
    }
    const handlerLoggOut = () => {
        setLoggIn(null)
        console.log(loggedIn)
    }
    return(
        <>
        <h3>User Name is {loggedIn?.name}</h3>
        <h3>Your email is {loggedIn?.email}</h3>
        <h3>Your phone is {loggedIn?.phone}</h3>
        <button onClick={handlerLoggIn}>LoggIn</button>
        <button onClick={handlerLoggOut}>LoggOut</button>
        
        </>
    )
}