import {useState} from 'react'

export const LoggedIn = () => {
    const [isLoggedIn, setLoggedIn] = useState(false)

    const handlerLogIn = () => {
        setLoggedIn(true);
    };
    const handlerLogOut = () => {
        setLoggedIn(false);
    };

    return(
        <>
            <button onClick={handlerLogIn}>Log in</button>
            <button onClick={handlerLogOut}>Log out</button>
            <h3>User is {isLoggedIn ? 'log in success' : 'log out success'}</h3>
        </>
    )
}