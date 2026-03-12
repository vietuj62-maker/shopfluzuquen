app.post("/webhook-bank", async (req,res)=>{

let content = req.body.content
let amount = req.body.amount

})
const express = require("express")
const app = express()

app.use(express.json())

app.post("/webhook-bank",(req,res)=>{

console.log(req.body)

})

app.listen(3000)
