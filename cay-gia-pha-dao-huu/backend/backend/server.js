const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

// Dữ liệu gia đình anh
const members = [
  { id: "1", name: "Đào Hữu Tý", gender: "Nam", birth: "1975-04-15", relation: "Chồng" },
  { id: "2", name: "Trần Thị Hường", gender: "Nữ", birth: "1978-09-20", relation: "Vợ" },
  { id: "3", name: "Đào Hữu Khánh", gender: "Nam", birth: "2002-06-10", relation: "Con trai" },
  { id: "4", name: "Đào Hữu Quốc", gender: "Nam", birth: "2005-12-25", relation: "Con trai" }
]

app.get('/api/members', (req, res) => {
  res.json(members)
})

app.listen(5000, () => {
  console.log('Backend chạy tại http://localhost:5000')
  console.log('Truy cập: http://localhost:5000/api/members')
})