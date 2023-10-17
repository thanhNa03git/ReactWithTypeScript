export const Paragraph = () => {
    return (
        <>
            <p style={{textAlign:'justify', padding: '2rem'}}>Context giúp chia sẻ dữ liệu giữa các thành phần con mà không cần truyền props qua nhiều cấp.
                Để sử dụng useContext trong ReactJS TypeScript, bạn cần thực hiện các bước sau:
                <br></br><br></br>
                B1: Định nghĩa một Context: Đầu tiên, bạn cần tạo một Context bằng cách sử dụng hàm createContext của React.
                <br></br><br></br>
                B2: Cung cấp giá trị cho Context: Bạn cần bọc các thành phần con mà bạn muốn truy cập Context vào bên trong một ThemeProvider hoặc bất kỳ thành phần cung cấp giá trị cho Context. 
                <br></br><br></br>
                B3: Sử dụng useContext để truy cập giá trị trong Context: Bạn có thể sử dụng useContext trong bất kỳ thành phần con nào bên trong ThemeProvider để truy cập và sử dụng giá trị trong Context. </p>
        </>
    )
}