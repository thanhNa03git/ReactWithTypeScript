type PersonProps = {
    name : {
        firstName: string,
        lastName: string
    }
};

export const Person = (props: PersonProps) => {
    return(
        <>
            <h1>My name is {props.name.firstName} {props.name.lastName}</h1>
        </>
    )
}