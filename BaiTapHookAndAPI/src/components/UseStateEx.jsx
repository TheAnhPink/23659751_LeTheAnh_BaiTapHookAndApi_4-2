import React from 'react'
import { useState } from 'react'
function UseStateEx() {
    // name là giá trị, setName là hàm để đổi giá trị đó
  const [name, setName] = useState("Lê Thế Anh");

  return (
    <div>
      <p>Tên hiện tại: {name}</p>
      {/* Khi bấm nút thì React thấy giá trị đổi nên vẽ lại render màn hình. */}
      <button onClick={() => setName("Nguyễn Văn Bảo")}>Đổi tên</button>
    </div>
  )
}

export default UseStateEx
