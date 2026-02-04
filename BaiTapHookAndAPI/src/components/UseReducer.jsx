import React from 'react'
import { useReducer } from 'react';
// nhận state hiện tại và action để trả về state mới
const reducer= (state, action)=> {
  switch(action) {
    case 'tang': return state+ 1
    case 'giam': return state- 1
    default: return state
  }
}

function UseReducer() {
// useReducer giữ số bắt đầu từ 0
// count là số hiện tại, dispatch dùng để báo muốn tăng hay giảm    
  const [count,dispatch]= useReducer(reducer, 0);

  return (
    <div>
      <p>Số: {count}</p>
      <button onClick={()=>dispatch('giam')}>-</button>
      <button onClick={()=> dispatch('tang')}>+</button>
      
    </div>
  )
}

export default UseReducer
