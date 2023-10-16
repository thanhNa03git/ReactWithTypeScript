import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export const Box = () => {
    const theme = useContext(ThemeContext)
    // const hanlderChangeTheme = () =>{}
    return (
        < >
        {/* <button onClick={hanlderChangeTheme}>Change Theme</button> */}
            <div style={{backgroundColor: theme.primary.main, 
                color: theme.primary.text,
                height: '20rem'}}>
                Theme context
            </div>
        </>
    )
}