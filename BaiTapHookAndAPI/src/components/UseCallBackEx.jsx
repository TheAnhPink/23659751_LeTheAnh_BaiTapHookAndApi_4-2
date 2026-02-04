import React from 'react'
import { useCallback,useState } from 'react'
function UseCallBackEx() {
  const [text,setText]= useState("")

  const clearText=useCallback(()=> {
    setText("")// xóa hết chữ trong input
  }, []) // Hàm này được giữ nguyên, không tạo lại khi gõ chữ

  return (
    <div>
      <input value={text} onChange={(e)=>setText(e.target.value)} />
      {/* khi bấm nút sẽ gọi clearText để xóa hết chữ trong ô */}
      <button onClick={clearText}>Xóa chữ</button>
    </div>
  )
}

export default UseCallBackEx
