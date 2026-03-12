const API = "https://YOUR-REPLIT-API.repl.co"

let user = JSON.parse(localStorage.getItem("user"))

async function register(){

const username = document.getElementById("username").value
const password = document.getElementById("password").value

const res = await fetch(API+"/api/register",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({username,password})
})

const data = await res.json()

alert("Đăng ký thành công")

window.location="login.html"

}

async function login(){

const username = document.getElementById("username").value
const password = document.getElementById("password").value

const res = await fetch(API+"/api/login",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({username,password})
})

const data = await res.json()

if(data.error){

alert("Sai tài khoản")

}else{

localStorage.setItem("user",JSON.stringify(data))

window.location="shop.html"

}

}

async function loadItems(){

const res = await fetch(API+"/api/items")

const items = await res.json()

let html=""

items.forEach(i=>{

html+=`
<div>
${i.name} - ${i.price}
<button onclick="buy(${i.id})">Mua</button>
</div>
`

})

document.getElementById("items").innerHTML=html

}

async function buy(id){

await fetch(API+"/api/buy",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
userId:user.id,
itemId:id
})
})

alert("Mua thành công")

}

async function loadQR(){

const res = await fetch(API+"/api/qr/"+user.id)

const data = await res.json()

document.getElementById("qr").src=data.qr
document.getElementById("content").innerText=data.content

  }
