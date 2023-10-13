import { Name } from "./Person.types"

export type listPersonProps = {
    names: Name[]
}

export const ListPerson = (props: listPersonProps) => {
    return(
        <>
            <h2>This list person</h2>
            {props.names.map((name) =>{
                return(
                    <div>
                        <h3>{name.firstName} {name.lastName}</h3>
                    </div>
                )
            })}
        </>
    )
}