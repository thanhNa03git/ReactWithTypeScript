type ButtonPorps = {
    // kieu du lieu function nhan su kien click cua phan tu ben trong () 
    handlerClick: (event : React.MouseEvent<HTMLButtonElement>, id: string) => void
}
/**
 * -----Số 1 làm đối số có mục đích gì trong ví dụ trên ?
 * mục đích là để xác định được button cụ thể nào được nhấp
 * Trong trường hợp này, việc truyền số 1 có thể đại diện cho button đầu tiên, 
 * số 2 đại diện cho button thứ hai và tiếp tục như vậy.
 * Hoặc button submit đại diện cho hành bi submit, delete đại diện hành vi xóa.
 */
export const Button =(props: ButtonPorps) =>{
    
    return(
        <>
            <button onClick={(event) => props.handlerClick(event, 'submit')}>Click</button>
        </>
    )
}