import React from 'react'
import { useRef } from 'react'

function UseRefEx() {
    //dùng để giữ và truy cập trực tiếp tới thẻ input
  const inputCuaToi= useRef()

  const handleFocus= ()=> {
    inputCuaToi.current.focus() // Nhảy con trỏ chuột vào ô input
    inputCuaToi.current.style.backgroundColor= "yellow" // Đổi màu nền input
  };

  return (
    <div>
      <input ref={inputCuaToi} />
      <button onClick={handleFocus}>Nhấn nút để nhập</button>
    </div>
  )
}

export default UseRefEx
