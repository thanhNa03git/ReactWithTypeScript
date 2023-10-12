type StatusProps = {
    status: string
}

export const Status = (props : StatusProps) => {
    let message;
    if(props.status === 'loading')
        message = 'loading...'
    else if (props.status === 'success')
        message = 'update successful!!'
    else if (props.status==='error')
        message = 'please check your connect.'
    else
        message = 'error message'

    return (
        <>
            <h2>Status - {message}</h2>
        </>
    )
}