type listPersonProps = {
    names:{
        first: string
        last: string
    }[]
}

export const ListPerson = (props: listPersonProps) => {
    return(
        <>
            <h2>This list person</h2>
            {props.names.map((name) =>{
                return(
                    <div>
                        <h3>{name.first} {name.last}</h3>
                    </div>
                )
            })}
        </>
    )
}