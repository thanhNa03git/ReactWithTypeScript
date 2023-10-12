type HeadProps = {
    children: string
}

export const Heading =(props: HeadProps) => {
    return(
        <>
            {props.children}
        </>
    )
}