type HelloDataType = {
    name: string,
    age?: number, // optional type have "?" after name key
    isLogged: boolean
}

export const Hello = (props: HelloDataType) => {
    const { age = 0} = props  // age không được định nghĩa trong props thì giá trị mặc định sẽ là 0.
    return (
        <>
            
            <h1>Hello my name {props.name}. Im {props.age}</h1>
            <p>Ví dụ cho kiểu dữ liệu Boolean</p>
            {props.isLogged ? `Hello my name {props.name}. Im {age}` : `hello guest`}
        </>
    )
}