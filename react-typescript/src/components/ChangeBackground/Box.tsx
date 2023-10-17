// import { ThemeContext } from './ThemeContext';
import { useState } from "react";
import './theme.css';
import { Paragraph } from "./Paragraph";

export const Box = () => {
    const [changeTheme, setChangeTheme] = useState('dark')

    const toggleTheme =() =>{
        setChangeTheme(changeTheme ==='dark'?'light':'dark')
        console.log('changeTheme: ', changeTheme);  
    }
    return (
        < >
            <div className={changeTheme} style={{height: '20rem'}}>
                <button onClick={toggleTheme}>toggle theme</button>
                <Paragraph/>
            </div>
        </>
    )
}