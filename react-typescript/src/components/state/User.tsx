import { useState } from 'react';
type Author = {    
    name: string,
    email: string,
    phone: number
}

export const User = (props: Author) =>{
    const [loggedIn, setLogIn] = useState<Author | null>(null);
    
    const handlerLogIn = () => {
        setLogIn({
            name: props.name,
            email: props.email,
            phone: props.phone
        });
        console.log(loggedIn)
    }
    const handlerLogOut = () => {
        setLogIn(null)
        console.log(loggedIn)
    }
    return(
        <>
        <h3>User Name is {loggedIn?.name}</h3>
        <h3>Your email is {loggedIn?.email}</h3>
        <h3>Your phone is {loggedIn?.phone}</h3>
        <button onClick={handlerLogIn}>LogIn</button>
        <button onClick={handlerLogOut}>LogOut</button>
        
        </>
    )
}