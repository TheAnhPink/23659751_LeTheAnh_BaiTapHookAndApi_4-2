//Fetch API - GET, POST, DELETE
//lấy danh sách
function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
  // Dữ liệu gốc nhận dc
  // chuyển đổi dữ liệu sang json
    .then(res=>res.json())
    .then(data=> console.log("GET:", data));
}
//thêm user
function addUser() {
  fetch("https://jsonplaceholder.typicode.com/users", {
    // phương thức POST
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // Dữ liệu gửi đi
    // chuyển đổi dữ liệu sang json
    body: JSON.stringify({
      name: "Test User",
      email: "test@gmail.com",
    }),
  })
    .then(res => res.json())
    .then(data => console.log("POST:", data));
}
//xóa user
function deleteUser() {
  fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "DELETE",
    
  }).then(() => console.log("DELETE done"));
}
