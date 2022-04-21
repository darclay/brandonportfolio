const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/server',(req, res)=>{
  res.download('test_resume.pdf')
})

app.listen(5000);