const express = require('express')

const app = express()

app.get('/students',(req,res)=>{
   res.send(`get all students details ${req.url}`)
})
app.post('/create',(req,res)=>{
  res.send(`student created successfully ${req.url}`)
})
app.put('/update',(req,res)=>{
  res.send(`student data updated successfully ${req.url}`)
})
app.delete('/delete',(req,res)=>{
    res.send(`students data deleted successfully ${req.url}`)
})

app.listen(8081,()=>{
    console.log('server has started on port 8081')
})